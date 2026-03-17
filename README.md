# 🩺 EnfermaStudy

**Material de estudo completo para Enfermeiros(as), Técnicos e Auxiliares de Enfermagem — formados e estudantes. Funciona offline!**

> Criado por **Saieso Seraos** (Oseias Soares da Silva Luz) · 2026

---

## 📱 Sobre o Projeto

O **EnfermaStudy** é um Progressive Web App (PWA) gratuito, sem anúncios e offline-first, criado para estudantes e profissionais de enfermagem em todos os níveis — Enfermeiros(as), Técnicos e Auxiliares. Reúne em um único app tudo que é necessário para o dia a dia clínico e para a preparação de concursos.

---

## 🗂️ Estrutura dos Arquivos

```
📁 EnfermaStudy/
   ├── index.html          → App principal (PWA)
   ├── chat.html           → Comunidade em tempo real (Firebase)
   ├── recursos.html       → Hub de recursos extras
   ├── procedimentos.html  → 20+ procedimentos passo a passo
   ├── diluicoes.html      → Diluições de emergência
   ├── exames.html         → Exames diagnósticos
   ├── sistemas.html       → Sistemas do corpo humano
   ├── jelco.html          → Guia de calibres de jelco
   ├── fichas.html         → Checklists e fichas interativas
   └── sw.js               → Service Worker v4 (cache offline)
```

---

## ✨ Funcionalidades

### 📚 Conteúdo Teórico (index.html)
- **Prioridades** — Sinais vitais, medicamentos, PCR, SAE e muito mais
- **Procedimentos** — Curativo, nebulização, punção venosa, sondagem, ostomia
- **Doenças** — Patologias comuns com sinais, sintomas e cuidados de enfermagem
- **Clínica Geral** — IVAS, asma, hipertensão, diabetes, sepse
- **Emergências** — AVC, politrauma (ATLS/XABCDE), carro de emergência
- **Home Care** — Traqueostomia, UPP, ostomias, nutrição enteral
- **Outros Temas** — Farmacologia, anatomia, legislação, escalas clínicas, ética

### 🔧 Ferramentas Clínicas (index.html — offline)
- 🧮 **Calculadoras** — Gotejamento (macro/micro), dose/peso, diluição, IMC
- 🧠 **Glasgow interativo** — Clicável com resultado imediato
- 👶 **APGAR neonatal** — Tabela interativa
- 📊 **Escalas clínicas** — EVA (dor), Braden (UPP), Morse (queda)
- 💉 **Calendário Vacinal PNI 2024** — Tabela completa por faixa etária
- 💊 **Mini Bulário** — 30 medicamentos com dose, diluição e cuidados
- 🧰 **Bandejas de procedimentos** — Material necessário para cada técnica
- 📝 **Simulado estilo concurso** — 20 questões aleatórias com timer e gabarito
- 📓 **Anotador de plantão** — Salvo no dispositivo, exportável
- 🗂️ **Atalhos para Recursos Extras** — Grade de acesso rápido a todos os arquivos extras

### 🆕 Recursos Extras

#### 💉 procedimentos.html
- 20+ procedimentos clínicos com passo a passo detalhado
- Categorias: Acesso Venoso, Sondagens, Curativos, Medicações, Emergências, Coleta
- Filtro por categoria e busca por palavra-chave
- Diagramas SVG ilustrativos (ângulo de punção, posicionamento, etc.)
- Alertas e cuidados especiais por procedimento

#### 🧪 diluicoes.html
- Protocolos completos de diluição para emergências
- Inclui: Adrenalina, Amiodarona, KCl, Noradrenalina, Morfina, MgSO₄, Heparina, Naloxona e mais
- Tabelas com concentração, velocidade, indicação e alertas
- Busca em tempo real

#### 🫀 sistemas.html
- 10 sistemas do corpo humano com navegação por abas
- Para cada sistema: anatomia, fisiologia, alterações comuns e cuidados de enfermagem
- Sistemas: Cardiovascular, Respiratório, Nervoso, Digestivo, Urinário, Músculo-Esquelético, Endócrino, Tegumentar, Imunológico, Reprodutor

#### 🔬 exames.html
- 9 exames diagnósticos principais (Raio-X, TC, RM, USG, ECG, PET, EEG, Espirometria, Endoscopia)
- Para cada exame: o que é, indicações, preparo do paciente, papel do técnico
- Tabela comparativa entre os exames

#### 🩸 jelco.html
- Guia interativo de calibres de jelco (26G → 14G)
- Seletor visual com cores, fluxo, indicações e contraindicações
- Diagrama SVG do ângulo de punção
- Tabela comparativa e guia de decisão clínica

#### 📋 fichas.html
- **Checklist do Carro de Emergência** — Lacre, medicamentos e equipamentos com barra de progresso interativa
- **Ficha de Sinais Vitais** — Preenchimento com análise automática de alertas (FC, FR, Temp, SpO₂, glicemia, Glasgow, EVA) e botão de copiar anotação
- **Checklist de SVD** — Cuidados por plantão com marcação interativa
- **Checklist de Curativo** — Avaliação e técnica com marcação interativa
- **Tabela de Valores de Referência** — Normal, Alerta e Crítico para todos os parâmetros

### 🎬 Aprendendo na Prática (index.html)
- Mais de 50 vídeos organizados por tema
- Suporte a YouTube Shorts (formato vertical)
- Detecção automática de vídeos bloqueados (Erro 153) com fallback elegante
- Thumbnail-first (não carrega iframe até o clique)

### 🧬 Anatomia 3D (index.html)
- Links diretos para ZygoteBody, AnatomyLearning e Z-Anatomy
- Crânio humano 3D incorporado (UFMG via Sketchfab)
- Tabela comparativa das ferramentas

### 📋 Modelos de Evolução (index.html)
- 9 modelos completos de evolução de enfermagem (SOAP)
- Dificuldade fácil, médio e difícil
- Botão de cópia direta

### 📝 Exercícios (index.html)
- 70+ questões com resposta comentada
- Botão de reiniciar por grupo
- Temas: procedimentos, doenças, emergências, farmacologia, legislação

### 🔤 Glossário (index.html)
- Mais de 100 termos e siglas de enfermagem
- Busca em tempo real
- Categorias visuais por área

### 💬 Comunidade (chat.html)
- Chat em tempo real com Firebase
- Login com conta Google
- Modal de boas-vindas com regras da comunidade
- Sistema de moderação automática (palavras proibidas)
- Banimento progressivo: aviso → 10min → 24h → permanente
- Botão de denúncia de mensagens

---

## 🔄 Sistema de Atualização (SW v4)

O EnfermaStudy possui um sistema de atualização inteligente, especialmente útil para usuários com o app instalado no iPhone/Android:

- Quando uma nova versão é publicada no GitHub, o Service Worker novo é baixado silenciosamente em segundo plano
- Um **banner azul** aparece automaticamente no rodapé: *"🆕 Nova versão disponível!"*
- O usuário clica **"Atualizar ✓"** e o app recarrega com o conteúdo novo
- Sem necessidade de desinstalar ou reinstalar o app

> **Nota:** Na primeira atualização após o SW v4 ser instalado, a transição ocorre silenciosamente (fechar e reabrir). A partir daí o banner funciona perfeitamente.

---

## 🚀 Como usar

### Opção 1 — GitHub Pages (recomendado)
Acesse diretamente pelo link do GitHub Pages do repositório.

### Opção 2 — Instalar como app (PWA)
1. Abra o site no celular ou computador
2. **Android:** menu do navegador → **"Adicionar à tela inicial"**
3. **iPhone/iPad:** toque em **Compartilhar ⬆️** → **"Adicionar à Tela Inicial"**
4. **Computador:** clique no ícone de instalar na barra de endereços

### Opção 3 — Local (VS Code)
1. Clone o repositório
2. Abra com o VS Code + extensão **Live Server**
3. Clique com o botão direito no `index.html` → **"Open with Live Server"**

---

## ⚙️ Configuração do Chat (Firebase)

O `chat.html` requer um projeto Firebase configurado:

1. Crie um projeto em [firebase.google.com](https://firebase.google.com)
2. Ative **Authentication → Google**
3. Crie o **Realtime Database** (us-central1, modo teste)
4. Registre um app Web e copie o `firebaseConfig`
5. Substitua o `firebaseConfig` no `chat.html`
6. Publique as regras do banco (veja abaixo)
7. Adicione seu domínio em **Authentication → Domínios autorizados**

**Regras do Realtime Database:**
```json
{
  "rules": {
    "messages": {
      ".read": "auth != null",
      ".write": "auth != null"
    },
    "users": {
      "$uid": {
        ".read": "auth != null",
        ".write": "auth != null && auth.uid == $uid"
      }
    },
    "bans": {
      "$uid": {
        ".read": "auth != null",
        ".write": "auth != null && auth.uid == $uid"
      }
    },
    "reports": {
      ".read": false,
      ".write": "auth != null"
    }
  }
}
```

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Uso |
|---|---|
| HTML5 + CSS3 + JavaScript | App completo (sem frameworks) |
| PWA + Service Worker v4 | Funcionamento offline + banner de atualização |
| Firebase Auth | Login com Google |
| Firebase Realtime Database | Chat em tempo real |
| YouTube Embed API | Vídeos educativos |
| Sketchfab Embed | Modelos 3D anatômicos |
| localStorage | Anotador de plantão offline |
| SVG inline | Diagramas e infográficos clínicos |

---

## 💚 Apoie o Projeto

Este app é gratuito, sem anúncios e mantido por uma pessoa só. Se o EnfermaStudy te ajudou, considere contribuir com qualquer valor via Pix:

- **Chave Pix:** 94984122526 (telefone)
- **Favorecido:** Oseias Soares da Silva Luz
- **Banco:** Cloudwalk

Qualquer valor é bem-vindo e ajuda a manter o projeto vivo e crescendo. 🙏

---

## ⚠️ Aviso Legal

Este material é **exclusivamente educativo**. Em situações clínicas reais, sempre siga os protocolos institucionais e as orientações do enfermeiro responsável e da equipe médica.

---

## 👤 Autor

**Saieso Seraos** — pseudônimo de Oseias Soares da Silva Luz

- 🎓 Técnico em Enfermagem
- 💻 Instrutor de Informática
- 📚 Autor Independente
- 🌐 Criador de Conlangs — [academiadeconlangs.blogspot.com](https://academiadeconlangs.blogspot.com)

---

## 📄 Licença

Este projeto é de uso livre para fins educativos e não comerciais.
Para uso comercial, entre em contato com o autor.

---

<p align="center">
  Feito com ❤️ por <strong>Saieso Seraos</strong> · EnfermaStudy 2026
</p>
