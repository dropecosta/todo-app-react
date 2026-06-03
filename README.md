# Todo App

Pequeno app de tarefas construído com React para demonstrar um fluxo simples de criação, marcação e remoção de tarefas.

## Visão Geral

Este projeto implementa uma lista de tarefas com:

- criação de tarefas pela interface
- marcação e desmarcação de tarefas como concluídas
- remoção de tarefas existentes
- persistência dos dados no `localStorage` do navegador

## Funcionalidades

- Adicionar nova tarefa
- Marcar/desmarcar uma tarefa como concluída
- Remover uma tarefa
- Contar tarefas ativas no rodapé
- Persistência automática entre recarregamentos

## Instalação

1. Clone ou copie o repositório para sua máquina.
2. Abra a pasta do projeto.
3. Execute:

```bash
npm install
```

## Execução em desenvolvimento

Para iniciar o servidor de desenvolvimento, use:

```bash
npm run dev
```

Depois, abra o endereço exibido no terminal para ver o app no navegador.

## Build para produção

Para gerar os arquivos de produção, execute:

```bash
npm run build
```

Para pré-visualizar a build gerada:

```bash
npm run preview
```

## Estrutura do projeto

- `index.html` – ponto de entrada HTML do Vite
- `package.json` – dependências e scripts do projeto
- `src/main.jsx` – entrada principal do React
- `src/App.jsx` – componente principal com a lógica da lista de tarefas
- `src/index.css` – estilos globais da aplicação

## Como funciona

O app usa React para gerenciar estado e `localStorage` para persistir a lista de tarefas. Ao adicionar, remover ou marcar uma tarefa, o conteúdo do estado é salvo automaticamente no navegador.

## Tecnologias

- React
- JavaScript
- CSS

## Possíveis melhorias

- adicionar filtros por status (todas / ativas / concluídas)
- implementar edição de tarefas
- permitir limpar todas as tarefas concluídas
- adicionar animações de transição

## Observações

O projeto é uma base simples e leve para aprendizado de React e desenvolvimento com Vite. Pode ser estendido facilmente com novos recursos e estilos.
