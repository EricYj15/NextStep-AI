# NextStep AI · MVP

MVP responsivo para a plataforma **NextStep AI**, focada em requalificação profissional. Inclui três módulos principais acessíveis via menu lateral: Dashboard, Trilha de Aprendizado e Player de Aula.

## Stack
- HTML5 semântico
- CSS3 com Flexbox/Grid e variáveis CSS
- JavaScript vanilla para navegação e interações leves
- Google Fonts (Inter) e Font Awesome para tipografia e ícones

## Estrutura
```
.
├─ index.html     # Estrutura principal e marcação das seções
├─ style.css      # Tema, layout responsivo e componentes
└─ script.js      # Lógica de navegação e simulação de aulas
```

## Como executar
O projeto é estático e pode ser aberto diretamente no navegador (`index.html`). Para garantir comportamento idêntico em todos os recursos (ex.: fetch de ícones via CDN), sugere-se servir os arquivos localmente:

```powershell
cd "d:\Nova pasta (2)"
python -m http.server 8000
```

Abra `http://localhost:8000` e navegue pelo MVP.

## Deploy na Vercel
1. Faça login na Vercel e importe o repositório GitHub que contém estes arquivos.
2. Não há build: a Vercel detecta automaticamente que é um site estático e publica todos os arquivos da raiz (HTML, CSS, JS e imagens).
3. Mantenha o diretório raiz como o próprio repositório (não é necessário `vercel.json`).
4. Após o deploy inicial, qualquer push para a branch conectada (ex.: `main`) dispara uma nova publicação; use o botão **Redeploy** se quiser forçar manualmente.

## Publicar no GitHub
```powershell
cd "d:\Nova pasta (2)"
git init
git add .
git commit -m "feat: MVP NextStep AI"
git branch -M main
git remote add origin https://github.com/<seu-usuario>/<seu-repo>.git
git push -u origin main
```
Substitua `<seu-usuario>/<seu-repo>` pelo destino correto. Depois conecte esse repositório à Vercel seguindo os passos acima.

## Próximos passos sugeridos
1. Integrar backend real para progresso e cursos.
2. Persistir estado das tarefas e das aulas usando APIs.
3. Acrescentar testes automatizados (UI snapshot ou Cypress) antes de ir para produção.
