# 🩺 EnfermaStudy

**Material de estudo completo para Técnico de Enfermagem — funciona offline!**

> Criado por **Saieso Seraos** (Oseias Soares da Silva Luz) · 2026

---

## 📱 Sobre o Projeto

O **EnfermaStudy** é um Progressive Web App (PWA) gratuito e offline-first, criado para estudantes e profissionais de Técnico de Enfermagem. Reúne em um único app tudo que é necessário para o dia a dia clínico e para a preparação de concursos.

---

## ✨ Funcionalidades

### 📚 Conteúdo Teórico
- **Prioridades** — Sinais vitais, medicamentos, PCR, SAE e muito mais
- **Procedimentos** — Curativo, nebulização, punção venosa, sondagem, ostomia
- **Doenças** — Patologias comuns com sinais, sintomas e cuidados de enfermagem
- **Clínica Geral** — IVAS, asma, hipertensão, diabetes, sepse
- **Emergências** — AVC, politrauma (ATLS/XABCDE), carro de emergência
- **Home Care** — Traqueostomia, UPP, ostomias, nutrição enteral
- **Outros Temas** — Farmacologia, anatomia, legislação, escalas clínicas, ética

### 🔧 Ferramentas Clínicas (offline)
- 🧮 **Calculadoras** — Gotejamento (macro/micro), dose/peso, diluição, IMC
- 🧠 **Glasgow interativo** — Clicável com resultado imediato
- 👶 **APGAR neonatal** — Tabela interativa
- 📊 **Escalas clínicas** — EVA (dor), Braden (UPP), Morse (queda)
- 💉 **Calendário Vacinal PNI 2024** — Tabela completa por faixa etária
- 💊 **Mini Bulário** — 30 medicamentos com dose, diluição e cuidados
- 🧰 **Bandejas de procedimentos** — Material necessário para cada técnica
- 📝 **Simulado estilo concurso** — 20 questões aleatórias com timer e gabarito
- 📓 **Anotador de plantão** — Salvo no dispositivo, exportável

### 🎬 Aprendendo na Prática
- Mais de 50 vídeos organizados por tema
- Suporte a YouTube Shorts (formato vertical)
- Detecção automática de vídeos bloqueados (Erro 153) com fallback elegante
- Thumbnail-first (não carrega iframe até o clique)

### 🧬 Anatomia 3D
- Links diretos para ZygoteBody, AnatomyLearning e Z-Anatomy
- Crânio humano 3D incorporado (UFMG via Sketchfab)
- Tabela comparativa das ferramentas

### 📋 Modelos de Evolução
- 9 modelos completos de evolução de enfermagem (SOAP)
- Dificuldade fácil, médio e difícil
- Botão de cópia direta

### 📝 Exercícios
- 70+ questões com resposta comentada
- Botão de reiniciar por grupo
- Temas: procedimentos, doenças, emergências, farmacologia, legislação

### 🔤 Glossário
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

## 🗂️ Estrutura dos Arquivos

```
📁 EnfermaStudy/
   ├── index.html     → App principal (PWA)
   ├── chat.html      → Comunidade (requer Firebase configurado)
   └── sw.js          → Service Worker (cache offline)
```

---

## 🚀 Como usar

### Opção 1 — GitHub Pages (online)
Acesse diretamente pelo link do GitHub Pages do repositório.

### Opção 2 — Instalar como app (PWA)
1. Abra o site no celular ou computador
2. No celular Android: toque no menu → **"Adicionar à tela inicial"**
3. No iPhone: toque em **Compartilhar** → **"Adicionar à Tela Inicial"**
4. No computador: clique no ícone de instalar na barra de endereços

### Opção 3 — Local (VS Code)
1. Clone o repositório
2. Abra com o VS Code + extensão **Live Server**
3. Clique com o botão direito no `index.html` → **"Open with Live Server"**

---

## ⚙️ Configuração do Chat (Firebase)

O `chat.html` requer um projeto Firebase configurado. Veja o passo a passo:

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
| PWA + Service Worker | Funcionamento offline |
| Firebase Auth | Login com Google |
| Firebase Realtime Database | Chat em tempo real |
| YouTube Embed API | Vídeos educativos |
| Sketchfab Embed | Modelos 3D anatômicos |
| localStorage | Anotador de plantão offline |

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
