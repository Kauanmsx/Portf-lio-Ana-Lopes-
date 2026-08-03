"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";
import { contactConfig, createWhatsAppUrl } from "@/src/config/contact";
import { treatments } from "@/src/data/treatments";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  treatment: string;
  preferredTime: string;
  message: string;
  privacy: boolean;
};

function formatBrazilianPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) {
    return digits;
  }
  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

async function prepareFutureApiIntegration(data: FormValues) {
  return Promise.resolve({
    readyForApi: true,
    payload: data,
  });
}

export function ContactForm() {
  const [success, setSuccess] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      treatment: "",
      preferredTime: "",
      privacy: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    await prepareFutureApiIntegration(data);
    const message = [
      "Olá, Dra. Ana! Gostaria de agendar uma avaliação.",
      "",
      `Nome: ${data.name}`,
      `Telefone: ${data.phone}`,
      `E-mail: ${data.email}`,
      `Tratamento de interesse: ${data.treatment}`,
      `Melhor horário: ${data.preferredTime}`,
      `Mensagem: ${data.message || "Sem mensagem adicional"}`,
    ].join("\n");

    window.open(createWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    setSuccess(
      "As informações foram organizadas para envio pelo WhatsApp. Nenhum dado foi enviado para servidor.",
    );
  };

  return (
    <section className="section contact-section" id="contato">
      <div className="container contact-grid">
        <div className="contact-info">
          <SectionTitle
            eyebrow="Contato"
            title="Agende sua avaliação"
            subtitle="Preencha seus dados e continue a conversa pelo WhatsApp."
            align="left"
          />
          <ul>
            <li>
              <Phone aria-hidden="true" size={20} />
              <a href={`tel:${contactConfig.phone.replace(/\D/g, "")}`}>
                {contactConfig.phone}
              </a>
            </li>
            <li>
              <MessageCircle aria-hidden="true" size={20} />
              <a href={createWhatsAppUrl()} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <Mail aria-hidden="true" size={20} />
              <a href={`mailto:${contactConfig.email}`}>{contactConfig.email}</a>
            </li>
            <li>
              <MapPin aria-hidden="true" size={20} />
              <a href={contactConfig.mapUrl} target="_blank" rel="noreferrer">
                {contactConfig.address}
              </a>
            </li>
            <li>
              <Clock aria-hidden="true" size={20} />
              <span>{contactConfig.hours}</span>
            </li>
          </ul>
        </div>
        <form className="appointment-form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form-row">
            <label>
              Nome
              <input
                type="text"
                aria-label="Nome"
                autoComplete="name"
                aria-invalid={Boolean(errors.name)}
                {...register("name", { required: "Informe seu nome." })}
              />
              {errors.name ? <span className="form-error">{errors.name.message}</span> : null}
            </label>
            <label>
              Telefone
              <input
                type="tel"
                aria-label="Telefone"
                autoComplete="tel"
                aria-invalid={Boolean(errors.phone)}
                {...register("phone", {
                  required: "Informe seu telefone.",
                  minLength: { value: 14, message: "Informe um telefone válido." },
                  onChange: (event) => {
                    setValue("phone", formatBrazilianPhone(event.target.value), {
                      shouldValidate: true,
                    });
                  },
                })}
              />
              {errors.phone ? <span className="form-error">{errors.phone.message}</span> : null}
            </label>
          </div>
          <div className="form-row">
            <label>
              E-mail
              <input
                type="email"
                aria-label="E-mail"
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                {...register("email", {
                  required: "Informe seu e-mail.",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Informe um e-mail válido.",
                  },
                })}
              />
              {errors.email ? <span className="form-error">{errors.email.message}</span> : null}
            </label>
            <label>
              Tratamento de interesse
              <select
                aria-label="Tratamento de interesse"
                aria-invalid={Boolean(errors.treatment)}
                {...register("treatment", {
                  required: "Escolha um tratamento de interesse.",
                })}
              >
                <option value="">Selecione</option>
                {treatments.map((treatment) => (
                  <option key={treatment.id} value={treatment.name}>
                    {treatment.name}
                  </option>
                ))}
              </select>
              {errors.treatment ? (
                <span className="form-error">{errors.treatment.message}</span>
              ) : null}
            </label>
          </div>
          <label>
            Melhor horário
            <input
              type="text"
              aria-label="Melhor horário"
              placeholder="Ex.: manhã, tarde ou após 18h"
              aria-invalid={Boolean(errors.preferredTime)}
              {...register("preferredTime", {
                required: "Informe o melhor horário para contato.",
              })}
            />
            {errors.preferredTime ? (
              <span className="form-error">{errors.preferredTime.message}</span>
            ) : null}
          </label>
          <label>
            Mensagem
            <textarea
              aria-label="Mensagem"
              rows={4}
              placeholder="Conte brevemente o que você gostaria de avaliar."
              {...register("message")}
            />
          </label>
          <label className="checkbox-field">
            <input
              type="checkbox"
              aria-invalid={Boolean(errors.privacy)}
              {...register("privacy", {
                required: "É necessário aceitar a política de privacidade.",
              })}
            />
            <span>Aceito a política de privacidade.</span>
          </label>
          {errors.privacy ? (
            <span className="form-error">{errors.privacy.message}</span>
          ) : null}
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Preparando envio..." : "Enviar pelo WhatsApp"}
          </Button>
          {success ? <p className="form-success">{success}</p> : null}
        </form>
      </div>
    </section>
  );
}
