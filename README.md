# 🩺 EnfermaStudy

**Para Enfermeiros(as), Técnicos e Auxiliares de Enfermagem — formados e estudantes. Funciona offline!**

> Criado por **Saieso Seraos** (Oseias Soares da Silva Luz) · 2026

---

## 📌 Versão Atual

### `v3.2` — 2026
**Atualização de diretrizes clínicas 2025 + correções de protocolo.**

**Correções aplicadas:**
- 🔴 **XABCDE** — ATLS 11ª Ed. (2025): "X" como primeira etapa, controle de hemorragia exsanguinante antes da via aérea. Torniquete, packing e compressão direta documentados.
- 🩸 **Pressão Arterial — Diretriz SBC 2025**: PA normal redefinida como <120/80 mmHg. 120/80 agora é **pré-hipertensão**. Tabela HAS expandida com 3 estágios. Todos os arquivos afetados atualizados.
- 🫁 **Pneumotórax ATLS 11**: descompressão no 2º EIC LMC reintroduzida como opção.
- 🍽️ **OVACE AHA 2025**: adultos agora iniciam com 5 golpes nas costas → 5 compressões abdominais (antes era Heimlich direto). `procedimentos.html` e `resumos.html` atualizados.
- 📋 "Urgência hipertensiva" substituído por "elevação importante da PA sem lesão de órgão-alvo" (SBC 2025).
- 📊 Google Analytics (`G-FR02Y9XJX1`) adicionado em todos os 17 arquivos HTML.

### `v3.1` — 2026
**Expansão de conteúdo clínico e acessibilidade.**

- 🖨️ `resumos.html` — 8 fichas A4 para impressão
- 🩺 `cateteres.html` — PICC, CVC, Swan-Ganz e Cateter de Diálise
- 📢 Tagline expandida para todos os níveis de enfermagem
- 🔄 Service Worker v6

### `v3.0` — 2026
**Maior atualização do projeto.**

- 🃏 `flashcards.html` — 85 cards · 6 categorias · sistema de avaliação
- ❤️ `ecg.html` — 8 ritmos cardíacos com traçados SVG
- 🫁 `gasometria.html` — Interpretador de gasometria + balanço hídrico + eletrólitos
- 💊 `compatibilidade.html` — Tabela 20×20 compatibilidade medicamentos EV
- ⏱️ `cronometro.html` — Cronômetro de plantão com timers de medicação
- ⚖️ `legislacao.html` — Lei 7.498, COFEN, Código de Ética, bioética, SAE
- 🔄 Banner de atualização inteligente (SW v5)
- 💚 Card de doação via Pix na seção Sobre o Autor

### `v2.1` — 2026
- 🗂️ `recursos.html`, 💉 `procedimentos.html`, 🧪 `diluicoes.html`
- 🫀 `sistemas.html`, 🔬 `exames.html`, 🩸 `jelco.html`, 📋 `fichas.html`

### `v1.0` — 2026
- App principal com 11 seções, chat Firebase, Service Worker, ferramentas clínicas offline.

---

## 📱 Sobre o Projeto

O **EnfermaStudy** é um Progressive Web App (PWA) gratuito, sem anúncios e offline-first, criado para Enfermeiros(as), Técnicos e Auxiliares de Enfermagem — formados e estudantes. Reúne conteúdo teórico, ferramentas clínicas, procedimentos, exames, legislação e muito mais em um único app que funciona sem internet após o primeiro acesso.

---

## 🗂️ Estrutura Completa — 18 Arquivos

```
📁 EnfermaStudy/
│
├── 🔧 Core
│   ├── index.html                → App principal (PWA) v3.2
│   ├── sw.js                     → Service Worker v6 (cache offline + banner atualização)
│   ├── firebase-config.js        → ⚠️ Credenciais Firebase (NÃO commitar — .gitignore)
│   ├── firebase-config.example.js → Modelo para configuração local
│   └── .gitignore
│
├── 💬 Comunidade
│   ├── chat.html                 → Chat em tempo real (Firebase Auth + Realtime DB)
│   └── recursos.html             → Hub central de todos os recursos extras
│
├── 📚 Conteúdo Clínico
│   ├── procedimentos.html        → 20+ procedimentos passo a passo · busca · filtros
│   ├── diluicoes.html            → Protocolos de diluição para emergências
│   ├── sistemas.html             → 10 sistemas do corpo humano
│   ├── exames.html               → 9 exames diagnósticos com preparo
│   ├── ecg.html                  → 8 ritmos cardíacos com traçados SVG
│   └── compatibilidade.html      → Tabela 20×20 compatibilidade medicamentos EV
│
├── 🔬 Ferramentas Clínicas
│   ├── gasometria.html           → Interpretador gasometria + balanço hídrico + eletrólitos
│   ├── fichas.html               → Checklists interativos + ficha de sinais vitais
│   ├── cronometro.html           → Cronômetro de plantão com timers de medicação
│   └── jelco.html                → Guia de calibres 26G→14G
│
├── 🎓 Estudo e Concursos
│   ├── flashcards.html           → 85 cards · 6 categorias · sistema de avaliação
│   ├── legislacao.html           → Lei 7.498, COFEN, bioética, SAE
│   └── cateteres.html            → PICC, CVC, Swan-Ganz, cateter de diálise
│
└── 🖨️ Impressão
    └── resumos.html              → 8 fichas A4 formatadas (Glasgow, Braden, PCR, vacinas...)
```

---

## ✨ Funcionalidades por Arquivo

### index.html — App Principal
**Seções de conteúdo:** Início · Prioridades · Procedimentos · Doenças · Clínica Geral · Emergências · Home Care · Evolução (9 modelos SOAP) · Exercícios (70+) · Outros Temas · Glossário (100+) · Anatomia 3D · Na Prática (50+ vídeos) · Sobre o Autor

**Ferramentas offline:** Calculadoras (gotejamento, dose/peso, IMC) · Glasgow interativo · APGAR · EVA · Braden · Morse · Calendário Vacinal PNI 2024 · Mini Bulário (30 medicamentos) · Bandejas de procedimentos · Simulado (20 questões/timer) · Anotador de plantão

---

### Recursos Extras

| Arquivo | Destaques |
|---|---|
| `procedimentos.html` | 20+ procedimentos · filtro por categoria · busca · OVACE AHA 2025 |
| `diluicoes.html` | Adrenalina, Amiodarona, KCl, Noradrenalina, MgSO₄, Naloxona e mais |
| `sistemas.html` | 10 sistemas · anatomia · fisiologia · alterações · cuidados de enfermagem |
| `exames.html` | Raio-X, TC, RM, USG, ECG, PET, EEG, Espirometria, Endoscopia |
| `ecg.html` | Sinusal, bradicardia, taquicardia, FA, TV, FV, assistolia, bloqueio AV |
| `compatibilidade.html` | Verificador rápido + tabela matricial 20×20 · tags ✅❌⚠️ |
| `gasometria.html` | Interpretador pH/PaCO₂/HCO₃⁻ · calculadora BH · eletrólitos |
| `fichas.html` | Carro de emergência · SVD · curativo · ficha SV com alertas automáticos |
| `cronometro.html` | Timer 12h · 4 timers de medicação · vibração · marcadores |
| `jelco.html` | 26G→14G · cores · fluxo · indicações · diagrama de inserção |
| `flashcards.html` | Sinais Vitais · Procedimentos · Farmacologia · Emergências · Escalas · Legislação |
| `legislacao.html` | Lei 7.498/1986 · COFEN/COREn · Código de Ética · bioética · SAE · sigilo |
| `cateteres.html` | PICC · CVC (PVC) · Swan-Ganz (balonete, zeros) · diálise · bundle ICSRC · complicações |
| `resumos.html` | Sinais Vitais · Glasgow · Braden · Vacinas · PCR+XABCDE · Medicamentos · Carro · Legislação |
| `chat.html` | Firebase Auth (Google) · moderação automática · banimento progressivo · denúncia |
| `recursos.html` | Hub de navegação para todos os extras |

---

## 📋 Diretrizes Clínicas Aplicadas (2025)

| Diretriz | Fonte | Onde aplicado |
|---|---|---|
| **XABCDE** — X antes do A | ATLS 11ª Ed. (ACS 2025) | `index.html` · `resumos.html` |
| **PA normal <120/80** · Pré-HAS 120–139/80–89 | Diretriz SBC/SBN/SBH 2025 | `index.html` · `fichas.html` · `flashcards.html` · `resumos.html` |
| **OVACE** — 5 golpes + 5 compressões (adulto) | AHA Guidelines 2025 | `procedimentos.html` · `resumos.html` |
| Pneumotórax: 2º EIC LMC reintroduzido | ATLS 11ª Ed. 2025 | `index.html` |
| "Urgência hipertensiva" → novo termo | Diretriz SBC 2025 | `index.html` |

---

## 🔄 Sistema de Atualização (SW v6)

- Novo conteúdo publicado no GitHub → SW baixado silenciosamente
- Banner azul aparece: **"🆕 Nova versão disponível!"**
- Usuário clica **"Atualizar ✓"** → app recarrega
- Nenhuma reinstalação necessária

---

## 🚀 Como Usar

**GitHub Pages:** Acesse pelo link do repositório.

**Instalar como PWA:**
- Android: menu → "Adicionar à tela inicial"
- iPhone/iPad: Compartilhar ⬆️ → "Adicionar à Tela Inicial"
- Computador: ícone de instalar na barra de endereços

---

## ⚙️ Configuração do Chat (Firebase)

1. Criar projeto em [firebase.google.com](https://firebase.google.com)
2. Ativar **Authentication → Google**
3. Criar **Realtime Database** (us-central1)
4. Copiar `firebase-config.example.js` → renomear para `firebase-config.js` → preencher credenciais
5. Adicionar domínio do GitHub Pages em **Authentication → Domínios autorizados**
6. Publicar as regras do banco:

```json
{
  "rules": {
    "messages": { ".read": "auth != null", ".write": "auth != null" },
    "users": { "$uid": { ".read": "auth != null", ".write": "auth != null && auth.uid == $uid" } },
    "bans": { "$uid": { ".read": "auth != null", ".write": "auth != null && auth.uid == $uid" } },
    "reports": { ".read": false, ".write": "auth != null" }
  }
}
```

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 + CSS3 + JavaScript | App completo sem frameworks |
| PWA + Service Worker v6 | Offline + banner de atualização |
| SVG inline | Traçados de ECG, diagramas clínicos, jelco |
| Firebase Auth + Realtime DB | Chat em tempo real |
| YouTube Embed API | Vídeos educativos |
| localStorage | Anotador de plantão |
| Google Analytics G-FR02Y9XJX1 | Rastreamento de uso em todos os arquivos |

---

## 🚧 Próximas Implementações

| Arquivo | Descrição | Complexidade |
|---|---|---|
| `farmacologia.html` | Classes de medicamentos por sistema | ⭐⭐⭐ |
| `triagem.html` | Triagem de Manchester | ⭐⭐⭐ |
| `questoes.html` | Banco de questões por tema (100+) | ⭐⭐⭐⭐ |
| `casos_clinicos.html` | Situações clínicas comentadas | ⭐⭐⭐⭐ |
| `acls.html` | Protocolos ACLS/BLS com algoritmos | ⭐⭐⭐⭐⭐ |
| `forum.html` | Fórum Firebase com gamificação e títulos | ⭐⭐⭐⭐⭐ |

---

## 💚 Apoie o Projeto

Gratuito, sem anúncios, mantido por uma pessoa só.

- **Chave Pix:** `94984122526` (telefone)
- **Favorecido:** Oseias Soares da Silva Luz
- **Banco:** Cloudwalk

---

## ⚠️ Aviso Legal

Material **exclusivamente educativo**. Em situações clínicas reais, siga os protocolos institucionais e as orientações do enfermeiro responsável.

---

## 👤 Autor

**Saieso Seraos** — Oseias Soares da Silva Luz

- 🎓 Técnico em Enfermagem
- 💻 Instrutor de Informática
- 📚 Autor Independente
- 🌐 [academiadeconlangs.blogspot.com](https://academiadeconlangs.blogspot.com)

---

## 📄 Licença

Uso livre para fins educativos e não comerciais.

---

<p align="center">Feito com ❤️ por <strong>Saieso Seraos</strong> · EnfermaStudy v3.2 · 2026</p>
