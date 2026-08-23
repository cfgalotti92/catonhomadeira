# Diretrizes do Projeto - Catonho Madeiras

Este espaço de trabalho está configurado com o ecossistema Antigravity 2.0 e o diretório de customizações `.agents/`.

## Estrutura de Customizações
- **Skills**: Localizadas em `.agents/skills/` (repertório completo de desenvolvimento, SEO, Cloudflare, automações e auditorias).
- **Plugins**: Localizados em `.agents/plugins/` (Firebase e outros serviços integrados).
- **MCP Servers**: Configurados em `.agents/mcp_config.json`.
- **Regras**: Configuráveis em `.agents/rules/`.

## Orquestração de Agentes
Ao utilizar o Antigravity 2.0 para orquestrar fluxos e tarefas:
1. As skills registradas em `.agents/skills/` serão descobertas automaticamente pelo agente.
2. Cada skill possui seu arquivo `SKILL.md` com instruções detalhadas de execução sob demanda (*progressive disclosure*).
3. Utilize as convenções do Antigravity para subagentes, ferramentas e planejamento.
