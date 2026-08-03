import { Button } from "../components/ui/Button";
import { AnimatedLogo } from "../components/animations/AnimatedLogo";

export function NotFound() {
  return (
    <main className="not-found-page">
      <AnimatedLogo />
      <span className="eyebrow">Página não encontrada</span>
      <h1>Esta página saiu do protocolo</h1>
      <p>
        O endereço acessado não existe, mas você pode voltar para a página
        principal e continuar sua navegação.
      </p>
      <Button href="/" icon="arrow">
        Voltar ao início
      </Button>
    </main>
  );
}
