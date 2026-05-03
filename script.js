/**
 * DADOS DO CATÁLOGO - 24 RISCOS COMPLETOS
 */

// ── Mapa de Estudos Primários (E## → título + autores + ano + DOI) ──
const estudosMapa = {
    "E01": { titulo: "Strategic Patterns to Foster the Evolution of Emerging Software Ecosystems", autores: "Belo e Alves", ano: "2025", doi: "https://doi.org/10.1002/smr.2747" },
    "E02": { titulo: "A Graph-Based Approach for Software Functionality Classification on the Web", autores: "Jiang et al. ", ano: "2024", doi: "https://doi.org/10.1007/978-981-96-0576-7_5" },
    "E03": { titulo: "Understanding Abandonment and Slowdown Dynamics in the Maven Ecosystem", autores: "Hasan et al.", ano: "2025", doi: "https://doi.org/10.1109/MSR66628.2025.00065" },
    "E04": { titulo: "Impact of Minimum Viable Product on Software Ecosystem Failure", autores: "Saarni et al.", ano: "2025", doi: "https://doi.org/10.1016/j.infsof.2024.107612" },
    "E05": { titulo: "OSS Malicious Package Analysis in the Wild", autores: "Zhou et al.", ano: "2024", doi: "https://doi.org/10.1109/DSN64029.2025.00045" },
    "E06": { titulo: "A Framework for Software Vendor Selection by Applying Inconsistency and Conflict Removal (ICR) Method", autores: "Rani et al.", ano: "2024", doi: "https://doi.org/10.1007/s13198-023-02190-x" },
    "E07": { titulo: "A Cast of Thousands: How the IDEAS Productivity Project Has Advanced Software Productivity and Sustainability", autores: "Mclnnes et al.", ano: "2024", doi: "https://doi.org/10.1109/MCSE.2024.3383799" },
    "E08": { titulo: "Modeling Interconnected Social and Technical Risks in Open Source Software Ecosystems", autores: "Schueller e Wachs", ano: "2024", doi: "https://doi.org/10.1177/26339137241231912" },
    "E09": { titulo: "Maven Unzipped: Exploring the Impact of Library Packaging on the Ecosystem", autores: "Keshani et al.", ano: "2024", doi: "https://doi.org/10.1109/ICSME58944.2024.00016" },
    "E10": { titulo: "Lessons from the Long Tail: Analysing Unsafe Dependency Updates across Software Ecosystems", autores: "Wattanakriengkrai et al.", ano: "2023", doi: "https://doi.org/10.1145/3611643.3613086" },
    "E11": { titulo: "On the Discoverability of NPM Vulnerabilities in Node.js Projects", autores: "Alfadel et al.", ano: "2023", doi: "https://doi.org/10.1145/3571848" },
    "E12": { titulo: "Understanding the Role of External Pull Requests in the NPM Ecosystem", autores: "Maeprasart et al", ano: "2023", doi: "https://doi.org/10.1007/s10664-023-10315-w" },
    "E13": { titulo: "Vulnerability Management in Linux Distributions: An Empirical Study on Debian and Fedora", autores: "Lin et al.", ano: "2022", doi: "https://doi.org/10.1007/s10664-022-10267-7" },
    "E14": { titulo: "Maintenance Cost of Software Ecosystem Updates", autores: "Berhe et al.", ano: "2023", doi: "https://doi.org/10.1016/j.procs.2023.03.077" },
    "E15": { titulo: "An Empirical Study of Artifacts and Security Risks in the Pre-trained Model Supply Chain", autores: "Jiang et al.", ano: "2022", doi: "https://doi.org/10.1145/3560835.3564547" },
    "E16": { titulo: "smartPip: A Smart Approach to Resolving Python Dependency Conflict Issues", autores: "Wang et al.", ano: "2022", doi: "https://doi.org/10.1145/3551349.3560437" },
    "E17": { titulo: "Goals within Trust-based Digital Ecosystems", autores: "Cioroaica et al.", ano: "2021", doi: "https://doi.org/10.1109/SESoS-WDES52566.2021.00006" },
    "E18": { titulo: "Software Ecosystems Governance - An Analysis of SAP and GNOME Platforms", autores: "Oliveira e Alves", ano: "2021", doi: "https://doi.org/10.1109/SEAA53835.2021.00045" },
    "E19": { titulo: "TrustSECO: A Distributed Infrastructure for Providing Trust in the Software Ecosystem", autores: "Hou et al", ano: "2021", doi: "https://doi.org/10.1007/978-3-030-79022-6_11" },
    "E20": { titulo: "Technical Leverage in a Software Ecosystem: Development Opportunities and Security Risks", autores: "Massacci e Pashchenko", ano: "2021", doi: "https://doi.org/10.1109/ICSE43902.2021.00125" },
    "E21": { titulo: "Do Scaling Agile Frameworks Address Global Software Development Risks? An Empirical Study", autores: "Beecham et al.", ano: "2021", doi: "https://doi.org/10.1016/j.jss.2020.110823" },
    "E22": { titulo: "Software Reuse Cuts Both Ways: An Empirical Analysis of Its Relationship with Security Vulnerabilities", autores: "Gkortzis et al.", ano: "2021", doi: "https://doi.org/10.1016/j.jss.2020.110653" },
    "E23": { titulo: "Open Source Software Supply Chain for Reliability Assurance of Operating Systems", autores: "Zhao et al.", ano: "2020", doi: "https://doi.org/10.13328/j.cnki.jos.006070" },
    "E24": { titulo: "An Empirical Comparison of Dependency Network Evolution in Seven Software Packaging Ecosystems", autores: "Decan et al.", ano: "2019", doi: "https://doi.org/10.1007/s10664-017-9589-y" },
    "E25": { titulo: "Risks and Assets: A Qualitative Study of a Software Ecosystem in the Mining Industry", autores: "Olsson e Franke", ano: "2019", doi: "https://doi.org/10.1145/3338906.3340443" },
    "E26": { titulo: "Which Factors Affect the Evangelist's Support During Training Sessions in Mobile Software Ecosystems?", autores: "Fontão et al.", ano: "2018", doi: "https://doi.org/10.1145/3241403.3241427" },
    "E27": { titulo: "An Exploratory Study on Library Aging by Monitoring Client Usage in a Software Ecosystem", autores: "Kula et al.", ano: "2017", doi: "https://doi.org/10.1109/SANER.2017.7884643" },
    "E28": { titulo: "Towards a Multi-criteria Decision Support Method for Consumer Electronics Software Ecosystems", autores: "Hartmann e Bosh", ano: "2016", doi: "https://doi.org/10.1002/smr.1785" },
    "E29": { titulo: "The Influence of Developer Multi-homing on Competition between Software Ecosystems", autores: "Hyrynsalmi et al.", ano: "2016", doi: "https://doi.org/10.1016/j.jss.2015.08.053" },
    "E30": { titulo: "Intelligently Transparent Software Ecosystems", autores: "Herbsleb et al..", ano: "2016", doi: "https://doi.org/10.1109/MS.2015.156" },
    "E31": { titulo: "Tracing Known Security Vulnerabilities in Software Repositories – A Semantic Web Enabled Modeling Approach", autores: "Alqahtani et al.", ano: "2016", doi: "https://doi.org/10.1016/j.scico.2016.01.005" },
    "E32": { titulo: "On Using Markov Decision Processes to Model Integration Solutions for Disparate Resources in Software Ecosystems", autores: "Frantz et al.", ano: "2015", doi: "https://doi.org/10.5220/0005346902600267" },
    "E33": { titulo: "Variability Mechanisms in Software Ecosystems", autores: "Berger et al.", ano: "2014", doi: "https://doi.org/10.1016/j.infsof.2014.05.00" },
    "E34": { titulo: "Software Ecosystems Risks", autores: "Manalif et al.", ano: "2013", doi: "https://doi.org/10.5220/0004589904170422" },
    "E35": { titulo: "Analyses of Two End-user Software Vulnerability Exposure Metrics", autores: "Wright et al.", ano: "2013", doi: "https://doi.org/10.1109/ARES.2012.33" },
};

// ── Mapa de Soluções (S## → nome completo + DOI do estudo de origem) ──
const solucoesMapa = {
    "S01": { nome: "Framework HIN e Metapath2Vec para classificação de pacotes", doi: "https://doi.org/10.1007/978-981-96-0576-7_5" },
    "S02": { nome: "Framework para seleção de fornecedores de software em ECOS", doi: "https://doi.org/10.1007/s13198-023-02190-x" },
    "S03": { nome: "Framework para modelagem de riscos sociotécnicos em ECOS", doi: "https://doi.org/10.1177/26339137241231912" },
    "S04": { nome: "Framework conceitual de mecanismos de variabilidade em ECOS", doi: "https://doi.org/10.1016/j.infsof.2014.05.00" },
    "S05": { nome: "Framework distribuído TrustSECO para registrar e calcular fatos de confiança", doi: "https://doi.org/10.1007/978-3-030-79022-6_11" },
    "S06": { nome: "Intelligent Software Assurance and Monitoring (ISAM)", doi: "https://doi.org/10.1109/MS.2015.156" },
    "S07": { nome: "Framework SE-GPS baseado em Web Semântica para rastreamento de vulnerabilidades", doi: "https://doi.org/10.1016/j.scico.2016.01.005" },
    "S08": { nome: "Modelo de representação de metas e anti-metas baseadas em confiança", doi: "https://doi.org/10.1109/SESoS-WDES52566.2021.00006" },
    "S09": { nome: "Modelo conceitual de governança de ECOS para mitigar riscos", doi: "https://doi.org/10.1109/SEAA53835.2021.00045" },
    "S10": { nome: "Modelo de technical leverage para avaliar riscos de dependências em ECOS", doi: "rg/10.1109/ICSE43902.2021.00125" },
    "S11": { nome: "Modelo teórico sobre relação entre reutilização de software e riscos de segurança", doi: "https://doi.org/10.1016/j.jss.2020.110653" },
    "S12": { nome: "Modelo de envelhecimento de bibliotecas baseado em uso de clientes", doi: "https://doi.org/10.1109/SANER.2017.7884643" },
    "S13": { nome: "Modelo baseado em processos de decisão de Markov para identificar riscos", doi: "https://doi.org/10.5220/0005346902600267" },
    "S14": { nome: "Assegurar a robustez da plataforma para mitigar riscos no ECOS", doi: "https://doi.org/10.1002/smr.2747" },
    "S15": { nome: "Atrair, manter e apoiar atores para mitigar riscos de engajamento e conflitos", doi: "https://doi.org/10.1002/smr.2747" },
    "S16": { nome: "Adotar mecanismos de segurança em hubs de modelos pré-treinados", doi: "https://doi.org/10.1145/3560835.3564547" },
    "S17": { nome: "Uso de Service Level Agreements (SLA) como prática de gerência de riscos", doi: "https://doi.org/10.1145/3338906.3340443" },
    "S18": { nome: "Ferramenta DepReveal para descoberta e análise de vulnerabilidades em projetos NPM", doi: "https://doi.org/10.1145/3571848" },
    "S19": { nome: "Ferramenta smartPip para mitigar conflitos de dependências em ECOS Python", doi: "https://doi.org/10.1145/3551349.3560437" },
    "S20": { nome: "Método de gerenciamento da confiabilidade da cadeia de suprimentos de software", doi: "https://doi.org/10.13328/j.cnki.jos.006070" },
    "S21": { nome: "Método multicritério para seleção de tipos de ECOS e decisões estratégicas", doi: "https://doi.org/10.1002/smr.1785" },
};


const dadosRiscos = [
    {
        id: "R01",
        risco: "Comprometimento da cadeia de suprimentos de software",
        descricao: "A cadeia de suprimentos torna-se um vetor crítico para ameaças de cibersegurança, incluindo a injeção de código malicioso durante o desenvolvimento e distribuição de artefatos. Falhas em dependências upstream podem comprometer todo o ECOS (e.g., Heartbleed, Apache Struts).",
        cenario: "",
        dimensao: "Técnico",
        classeSEI: "Risco de Engenharia de Produto",
        elementoSEI: "Especialidades em engenharia",
        desafio: "Segurança (arquitetura)",
        justificativaSEI: "O comprometimento da cadeia de suprimentos afeta diretamente a integridade dos artefatos de software produzidos e distribuídos pelo ecossistema. Por envolver falhas introduzidas durante o desenvolvimento e a distribuição, etapas centrais da engenharia de produto, o risco é classificado como de Engenharia de Produto, com foco em especialidades de segurança arquitetural. O desafio de segurança (arquitetura) reflete a necessidade de incorporar controles desde as etapas de design e integração de componentes.",
        ecos: "Híbrido / Aberto",
        justificativa: "A interconexão e o uso massivo de bibliotecas de terceiros nesses ecossistemas criam vetores críticos para a injeção de código malicioso durante o desenvolvimento e distribuição. Essa dependência estrutural permite que falhas upstream comprometam toda a rede integrada.",
        metrica: "Robustez",
        justificativaMetrica: "A robustez, conforme proposta por Iansiti e Levien (2004), mede a capacidade do ecossistema de sobreviver a perturbações. O comprometimento da cadeia de suprimentos representa uma ameaça direta à sobrevivência do ECOS, pois falhas introduzidas em componentes centrais podem propagar-se de forma sistêmica e comprometer a continuidade do ecossistema como um todo.",
        processoValor: "Criação e entrega de valor",
        justificativaProcesso: "Segundo Burström et al. (2022), a criação e entrega de valor correspondem ao processo pelo qual o ecossistema produz e disponibiliza soluções de software para seus participantes. O comprometimento da cadeia de suprimentos afeta diretamente esse processo, pois introduz falhas e artefatos maliciosos nos próprios produtos entregues, inviabilizando a confiança nas entregas do ecossistema.",
        solucoes: "S01 (Framework HIN; Metapath2Vec): Reduz a exposição a bibliotecas maliciosas, fortalecendo a cadeia de suprimentos. / S05 (Framework TrustSECO): Registra e calcula fatos de confiança, apoiando a detecção de vulnerabilidades. / S20 (Método de Gerenciamento): Utiliza grafos de conhecimento para identificar vulnerabilidades e calcular escores de confiabilidade na cadeia.",
        estudos: ["E02", "E05", "E08", "E10", "E15", "E19"]
    },    
    {
        id: "R02",
        risco: "Exposição contínua a vulnerabilidades em múltiplos componentes do ECOS",
        descricao: "Ocorre devido ao atraso na aplicação de correções, ampliado pelo fenômeno do Transitive Growth (crescimento de dependências que aumenta a superfície de ataque). Aplicações podem permanecer expostas a falhas conhecidas, propagando vulnerabilidades entre diferentes ECOS.",
        cenario: "",
        dimensao: "Técnico",
        classeSEI: "Risco de Engenharia de Produto",
        elementoSEI: "Especialidades em engenharia",
        desafio: "Segurança (arquitetura); Garantia de confiabilidade (arquitetura)",
        justificativaSEI: "A exposição contínua a vulnerabilidades decorre de decisões e omissões na engenharia do produto especificamente na gestão de dependências e na aplicação de patches. Como o risco se manifesta em múltiplos componentes e está diretamente associado a arquitetura de dependências transitivas, ele se enquadra como Risco de Engenharia de Produto, com ênfase nas especialidades de segurança e confiabilidade arquitetural, dado que a superfície de ataque cresce proporcionalmente ao número de dependências.",
        ecos: "Híbrido",
        justificativa: "Ecossistemas híbridos são propensos a atrasos na aplicação de correções (patches) devido a seus múltiplos componentes. O crescimento transitivo dessas dependências amplia a superfície de ataque, deixando as aplicações expostas e propagando as vulnerabilidades conhecidas.",
        metrica: "Robustez",
        justificativaMetrica: "A exposição prolongada a vulnerabilidades conhecidas enfraquece a capacidade do ECOS de resistir a perturbações externas, dimensão central da robustez (Iansiti e Levien, 2004). O fenômeno do Transitive Growth aumenta a amplitude do impacto potencial, comprometendo múltiplos componentes simultaneamente e reduzindo a resiliência do ecossistema.",
        processoValor: "Criação e entrega de valor",
        justificativaProcesso: "A presença de vulnerabilidades não corrigidas em múltiplos componentes compromete a qualidade e a segurança dos artefatos produzidos e entregues pelo ECOS. Isso afeta diretamente o processo de criação e entrega de valor (Burström et al., 2022), uma vez que os participantes não podem confiar na integridade das soluções disponibilizadas pela plataforma.",
        solucoes: "S05 (Framework TrustSECO): Apoia a detecção de vulnerabilidades. / S18 (Ferramenta DepReveal): Identifica vulnerabilidades e classifica advisories, reduzindo o tempo de exposição.",
        estudos: ["E09", "E11", "E13", "E35"]
    },
    {
        id: "R03",
        risco: "Vulnerabilidades em dependências transitivas de bibliotecas",
        descricao: "Vulnerabilidades presentes em dependências, especialmente transitivas, que estão além do controle direto dos desenvolvedores. A disseminação global do código aberto intensifica esse problema, ampliando a propagação de falhas em múltiplos ECOS.",
        cenario: "",
        dimensao: "Técnico",
        classeSEI: "Risco de Engenharia de Produto",
        elementoSEI: "Especialidades em engenharia",
        desafio: "Segurança (arquitetura)",
        justificativaSEI: "Dependências transitivas são componentes indiretos incorporados ao produto sem controle explícito dos desenvolvedores. A presença de vulnerabilidades nessas dependências configura um risco de engenharia de produto, pois afeta a integridade e a segurança do artefato final. A classificação em especialidades de engenharia reflete que o controle desse risco exige práticas de engenharia arquitetural específicas, como a análise de árvores de dependências e rastreamento de vulnerabilidades.",
        ecos: "Aberto",
        justificativa: "A disseminação ao software de código aberto faz com que falhas se propaguem em múltiplos componentes que estão além do controle direto dos desenvolvedores. A estrutura descentralizada aberta intensifica esse problema.",
        metrica: "Robustez",
        justificativaMetrica: "Vulnerabilidades em dependências transitivas reduzem a robustez do ECOS porque introduzem pontos de falha ocultos que escapam ao controle dos participantes. Conforme Iansiti e Levien (2004), a robustez está associada a capacidade de sobrevivência diante de ameaças; dependências vulneráveis não gerenciadas representam ameaças latentes que podem comprometer essa capacidade.",
        processoValor: "Criação de valor",
        justificativaProcesso: "As dependências transitivas integram-se ao núcleo dos artefatos produzidos no ECOS, participando diretamente do processo de criação de valor (Burström et al., 2022). Vulnerabilidades nesse nível comprometem a qualidade e a segurança do que está sendo criado, sem que os desenvolvedores tenham visibilidade ou controle sobre a origem do risco.",
        solucoes: "S05 (Framework TrustSECO): Ajuda na detecção de vulnerabilidades em geral. / S18 (Ferramenta DepReveal): Ferramenta de descoberta e análise de vulnerabilidades em projetos NPM.",
        estudos: ["E11", "E31"]
    },
    {
        id: "R04",
        risco: "Incompatibilidade entre versões de bibliotecas interdependentes",
        descricao: "Falhas na manutenção e evolução de projetos (não relacionadas a segurança) que surgem devido a incompatibilidade entre versões de bibliotecas em redes extensas, agravada pelo uso de versões desatualizadas. Tais problemas podem gerar impactos em cascata em projetos interdependentes.",
        cenario: "",
        dimensao: "Técnico",
        classeSEI: "Risco de Engenharia de Produto",
        elementoSEI: "Integração e teste",
        desafio: "Não identificado",
        justificativaSEI: "A incompatibilidade entre versões de bibliotecas manifesta-se no momento da integração de componentes, etapa em que bibliotecas interdependentes são combinadas para compor o produto final. Quando versões desatualizadas ou conflitantes são utilizadas, surgem falhas que se propagam em cascata. Essa natureza integração dependente justifica a classificação no elemento de Integração e Teste, dentro da categoria de Engenharia de Produto.",
        ecos: "Híbrido",
        justificativa: "Em ambientes híbridos, a integração de redes extensas de bibliotecas interdependentes e o uso de versões desatualizadas aumentam as chances de falhas na manutenção e evolução do software. Essa incompatibilidade pode gerar impactos em cascata entre os projetos de integração e teste.",
        metrica: "Produtividade",
        justificativaMetrica: "A incompatibilidade de versões impacta diretamente a produtividade do ecossistema (Iansiti e Levien, 2004), pois aumenta o esforço necessário para manutenção, integração e evolução dos projetos. O tempo e os recursos gastos na resolução de conflitos de versão reduzem a capacidade dos participantes de gerar e entregar valor de forma eficiente.",
        processoValor: "Entrega de valor",
        justificativaProcesso: "A incompatibilidade entre versões de bibliotecas interfere diretamente na entrega de valor (Burström et al., 2022), pois impede que atualizações e melhorias cheguem aos usuários finais sem fricção. O risco de impactos em cascata agrava esse problema, tornando o processo de atualização e entrega de software mais lento, custoso e propenso a falhas.",
        solucoes: "S19 (Ferramenta smartPip): Resolve conflitos de dependência por meio de restrições lógicas e otimização, prevenindo falhas de instalação.",
        estudos: ["E12", "E22", "E30", "E31"]
    },
    {
        id: "R05",
        risco: "Ataques direcionados à infraestrutura e aos pacotes do ecossistema",
        descricao: "Ataques que se aproveitam do aumento da superfície de ataque e da ampla disponibilidade de software de código aberto (e.g., ecossistema Maven) para exploração, impactando diretamente a proteção dos sistemas.",
        cenario: "",
        dimensao: "Técnico",
        classeSEI: "Risco de Engenharia de Produto",
        elementoSEI: "Especialidades em engenharia",
        desafio: "Segurança (arquitetura)",
        justificativaSEI: "Ataques à infraestrutura e aos pacotes do ecossistema exploram características arquiteturais do ECOS, como a abertura dos repositórios e a extensão da superfície de ataque, para comprometer seus componentes. Esse risco é classificado como de Engenharia de Produto porque afeta diretamente os artefatos e a infraestrutura técnica produzida e mantida no ecossistema, exigindo respostas de engenharia de segurança em nível arquitetural.",
        ecos: "Aberto",
        justificativa: "Repositórios públicos são elementos chave de ecossistemas abertos e facilitam a exploração por agentes mal-intencionados. O aumento da superfície de ataque atrelado a disponibilidade do código impacta a segurança dos sistemas.",
        metrica: "Robustez",
        justificativaMetrica: "Ataques direcionados a infraestrutura ameaçam a sobrevivência e a integridade do ecossistema como um todo, dimensão central da robustez (Iansiti e Levien, 2004). A exploração de pacotes utilizados pode comprometer não apenas um projeto isolado, mas toda a rede de dependências do ECOS, reduzindo sua capacidade de resistir e se recuperar de perturbações.",
        processoValor: "Criação de valor",
        justificativaProcesso: "Os pacotes e a infraestrutura do ECOS são os meios pelos quais os participantes criam valor (Burström et al., 2022). Ataques que comprometem esses elementos interrompem o processo de criação de valor na raiz, inviabilizando o uso seguro das ferramentas e bibliotecas que constituem a base técnica do ecossistema.",
        solucoes: "S05 (Framework TrustSECO): Ajuda a reconfigurar sistemas após ataques e apoia a detecção. / S17 (Prática SLA): Auxilia na redução de riscos técnicos e organizacionais (o que inclui ataques).",
        estudos: ["E03", "E09", "E12", "E13", "E22"]
    },
    {
        id: "R06",
        risco: "Injeção de código malicioso em pacotes distribuídos pelo ecossistema",
        descricao: "Invasores comprometem bibliotecas e utilizam vetores variados para propagar código malicioso em pacotes distribuídos pelo ECOS.",
        cenario: "",
        dimensao: "Técnico",
        classeSEI: "Risco de Engenharia de Produto",
        elementoSEI: "Especialidades em engenharia",
        desafio: "Segurança (arquitetura)",
        justificativaSEI: "A injeção de código malicioso em pacotes distribuídos é um risco que emerge diretamente do processo de produção e distribuição de artefatos de software, atividades centrais da engenharia de produto. Como o vetor de ataque explora o próprio fluxo de desenvolvimento e empacotamento do ECOS, a classificação recai sobre especialidades de segurança arquitetural, refletindo a necessidade de controles técnicos específicos durante o ciclo de vida de construção e distribuição dos artefatos.",
        ecos: "Aberto",
        justificativa: "Ecossistemas de código aberto são especialmente vulneráveis a injeção de código malicioso em pacotes, pois qualquer ator pode contribuir com código, e os mecanismos de revisão e auditoria são frequentemente insuficientes ou inexistentes. A ausência de controle centralizado sobre os repositórios públicos amplia os vetores disponíveis para comprometer bibliotecas amplamente utilizadas.",
        metrica: "Robustez",
        justificativaMetrica: "A injeção de código malicioso em pacotes distribuídos compromete a integridade estrutural do ecossistema, afetando sua capacidade de resistir a ameaças internas e externas, dimensão central da robustez (Iansiti e Levien, 2004). Como os pacotes comprometidos podem ser consumidos por múltiplos projetos dependentes, o impacto potencial é sistêmico, ameaçando a sobrevivência e a confiabilidade do ECOS como um todo.",
        processoValor: "Criação de valor",
        justificativaProcesso: "Os pacotes distribuídos pelo ECOS são os principais artefatos por meio dos quais os participantes criam valor (Burström et al., 2022). A injeção de código malicioso nesses pacotes compromete o processo de criação de valor em sua essência, pois transforma os próprios artefatos de software em vetores de dano, inviabilizando sua utilização segura e confiável pelos demais atores do ecossistema.",
        solucoes: "S01 (Framework HIN; Metapath2Vec): Reduz a exposição a bibliotecas maliciosas. / S05 (Framework TrustSECO): Apoia a detecção de vulnerabilidades e reconfiguração de sistemas. / S16 (Prática de Mecanismos de Segurança): Contribui para prevenir uploads maliciosos e aumenta a rastreabilidade.",
        estudos: ["E05", "E19"]
    },
    {
        id: "R07",
        risco: "Atualizações inseguras de dependências em bibliotecas compartilhadas",
        descricao: "O risco ocorre quando o processo de atualização de dependências introduz falhas, como a execução de código não verificado por meio de pull requests.",
        cenario: "",
        dimensao: "Técnico",
        classeSEI: "Risco de Engenharia de Produto",
        elementoSEI: "Código e teste unitário",
        desafio: "Não identificado",
        justificativaSEI: "O risco de atualizações inseguras ocorre no nível do código e da sua verificação, quando contribuições externas (pull requests) são incorporadas sem validação adequada, introduzindo falhas no produto. A classificação no elemento de Código e Teste Unitário reflete que a falha ocorre precisamente na ausência de verificação do código no momento de sua integração, exigindo práticas de revisão e teste que previnam a execução de código não verificado em bibliotecas compartilhadas.",
        ecos: "Híbrido / Aberto",
        justificativa: "Em ecossistemas híbridos e abertos, múltiplos atores externos contribuem com atualizações de código sem necessariamente passar por processos formais de revisão. A ausência de controle centralizado e de mecanismos de validação robustos nesses ambientes facilita a introdução de falhas por meio de pull requests não verificados, tornando o processo de atualização de dependências um vetor de risco adicional.",
        metrica: "Produtividade",
        justificativaMetrica: "Atualizações inseguras de dependências reduzem a produtividade do ecossistema (Iansiti e Levien, 2004) ao introduzir falhas que demandam esforços adicionais de diagnóstico, reversão e correção. O tempo perdido na identificação e na resolução de problemas causados por atualizações mal verificadas diminui a eficiência dos times de desenvolvimento e compromete a cadência de entrega do ECOS.",
        processoValor: "Entrega de valor",
        justificativaProcesso: "As atualizações de dependências integram o ciclo contínuo de entrega de software no ECOS (Burström et al., 2022). Quando esse processo introduz falhas por ausência de verificação, o fluxo de entrega de valor é interrompido ou degradado, gerando instabilidade nos projetos dependentes e comprometendo a confiabilidade das entregas realizadas pelo ecossistema.",
        solucoes: "S05 (Framework TrustSECO): Pode auxiliar na detecção de vulnerabilidades introduzidas, através do registro de fatos de confiança.",
        estudos: ["E05", "E10", "E24"]
    },
    {
        id: "R08",
        risco: "Propagação de bugs não resolvidos entre projetos do ecossistema",
        descricao: "Bugs não resolvidos em pacotes upstream (pacotes dos quais outros dependem) se propagam por toda a rede de dependências do ECOS, comprometendo em larga escala bibliotecas e sistemas dependentes (risco de não atualização).",
        cenario: "",
        dimensao: "Técnico",
        classeSEI: "Risco de Engenharia de Produto",
        elementoSEI: "Integração e teste",
        desafio: "Não identificado",
        justificativaSEI: "A propagação de bugs não resolvidos é um risco que se manifesta na integração entre projetos interdependentes do ECOS. Quando falhas em pacotes upstream não são corrigidas, elas são herdadas por todos os projetos que dependem desses pacotes, tornando o risco sistêmico. O elemento de Integração e Teste é o mais adequado, pois o problema ocorre precisamente na ausência de verificação e atualização durante o processo de integração de componentes compartilhados.",
        ecos: "Aberto",
        justificativa: "Em ecossistemas de código aberto, a manutenção de pacotes upstream depende frequentemente de voluntários sem obrigação formal de corrigir falhas. A descentralização da governança e a ausência de mecanismos que garantam a resolução de bugs criam condições propícias para que falhas persistam e se propaguem por toda a rede de dependências do ECOS.",
        metrica: "Produtividade",
        justificativaMetrica: "A propagação de bugs não resolvidos impacta diretamente a produtividade do ecossistema (Iansiti e Levien, 2004), pois força múltiplos projetos dependentes a lidar com falhas herdadas que fogem ao seu controle direto. O esforço necessário para contornar, diagnosticar ou aguardar a correção dessas falhas consome recursos dos participantes e reduz a eficiência operacional do ECOS como um todo.",
        processoValor: "Entrega de valor",
        justificativaProcesso: "A entrega de valor no ECOS (Burström et al., 2022) pressupõe que os artefatos disponibilizados funcionem de forma confiável. A propagação de bugs não resolvidos compromete essa premissa ao introduzir falhas nas entregas do ecossistema, obrigando os participantes a gerenciar instabilidades que deveriam ter sido resolvidas na origem, nos pacotes upstream.",
        solucoes: "S14 (Prática de Robustez da Plataforma): Mitiga vulnerabilidades estruturais e planeja a evolução, o que é essencial para conter a propagação de bugs.",
        estudos: ["E03", "E08"]
    },
    {
        id: "R09",
        risco: "Abandono de bibliotecas essenciais do ecossistema",
        descricao: "A descontinuidade de projetos ou a dependência de mantenedores voluntários pode comprometer gravemente sistemas dependentes e aumentar a vulnerabilidade do ECOS. Mais da metade das bibliotecas NPM (Node Package Manager) depende transitivamente de pelo menos uma biblioteca abandonada.",
        cenario: "",
        dimensao: "Técnico",
        classeSEI: "Risco da Engenharia de Produto",
        elementoSEI: "Requisitos",
        desafio: "Engenharia de Requisitos (processo)",
        justificativaSEI: "O abandono de bibliotecas essenciais compromete a capacidade do ecossistema de atender aos requisitos técnicos dos projetos dependentes. A classificação no elemento de Requisitos reflete que, quando uma biblioteca essencial é abandonada, os requisitos de manutenção, segurança e evolução que ela sustentava deixam de ser atendidos, gerando lacunas na engenharia do produto. O desafio de Engenharia de Requisitos evidencia que a identificação e o tratamento de dependências críticas precisam ser considerados desde o momento do levantamento de requisitos.",
        ecos: "Aberto",
        justificativa: "Em ecossistemas de código aberto, a manutenção de bibliotecas depende predominantemente de voluntários sem vínculos formais ou remuneração. Esse modelo estrutural torna o abandono de bibliotecas um risco inerente, já que a continuidade dos projetos está sujeita à disponibilidade e à motivação individual dos mantenedores, sem garantias institucionais de sustentação.",
        metrica: "Robustez",
        justificativaMetrica: "O abandono de bibliotecas essenciais ameaça diretamente a robustez do ecossistema (Iansiti e Levien, 2004), pois retira da rede componentes críticos dos quais outros projetos dependem transitivamente. A descontinuidade de bibliotecas amplamente utilizadas pode comprometer a sobrevivência de múltiplos projetos dependentes, fragilizando a resiliência estrutural do ECOS como um todo.",
        processoValor: "Criação de valor",
        justificativaProcesso: "Bibliotecas essenciais constituem a base técnica sobre a qual os participantes do ECOS criam valor (Burström et al., 2022). Seu abandono interrompe ou degrada o processo de criação de valor, pois os projetos dependentes perdem acesso a componentes fundamentais sem os quais não conseguem manter, evoluir ou garantir a segurança dos seus produtos.",
        solucoes: "S12 (Modelo de Envelhecimento): Prever a obsolescência a partir do uso permite planejar atualizações e mitigar o risco de abandono e manutenção. / S15 (Prática de Atrair e Reter Atores): Pode garantir a continuidade do projeto em caso de abandono",
        estudos: ["E03", "E08"]
    },
    {
        id: "R10",
        risco: "Envelhecimento de bibliotecas abertas amplamente utilizadas",
        descricao: "A ausência de manutenção em bibliotecas amplamente utilizadas aumenta a exposição a falhas e vulnerabilidades, ampliando os riscos de manutenção e segurança para sistemas dependentes",
        cenario: "",
        dimensao: "Técnico",
        classeSEI: "Risco da Engenharia de Produto",
        elementoSEI: "Integração e teste",
        desafio: "Não identificado",
        justificativaSEI: "O envelhecimento de bibliotecas abertas é um risco que se manifesta progressivamente durante o ciclo de vida dos componentes integrados ao ECOS. À medida que bibliotecas envelhecem sem manutenção adequada, surgem incompatibilidades e vulnerabilidades que afetam os projetos que as integram. A classificação no elemento de Integração e Teste reflete que o risco se torna evidente no momento em que versões desatualizadas são integradas a novos projetos ou quando falhas acumuladas comprometem a cobertura de testes existentes.",
        ecos: "Aberto",
        justificativa: "Bibliotecas de código aberto amplamente utilizadas frequentemente dependem de esforços voluntários de manutenção que tendem a diminuir com o tempo. Sem mecanismos formais de sustentação e sem incentivos estruturais para a atualização contínua, o envelhecimento dessas bibliotecas é um risco característico dos ecossistemas abertos, onde a longevidade de componentes críticos não é garantida por acordos institucionais.",
        metrica: "Produtividade",
        justificativaMetrica: "O envelhecimento de bibliotecas amplamente utilizadas reduz a produtividade do ecossistema (Iansiti e Levien, 2004), pois aumenta o custo de manutenção dos projetos dependentes. Desenvolvedores precisam despender esforços crescentes para contornar incompatibilidades, corrigir falhas herdadas e eventualmente migrar para alternativas mais atualizadas, comprometendo a eficiência do desenvolvimento no ECOS.",
        processoValor: "Criação e entrega de valor",
        justificativaProcesso: "Bibliotecas abertas amplamente utilizadas são insumos essenciais tanto para a criação quanto para a entrega de valor no ECOS (Burström et al., 2022). Seu envelhecimento compromete ambos os processos: a criação de valor é prejudicada pela dificuldade de construir sobre componentes obsoletos, enquanto a entrega de valor é afetada pela instabilidade e pelas vulnerabilidades que acompanham bibliotecas sem manutenção adequada.",
        solucoes: "S12 (Modelo de Envelhecimento): Prever a obsolescência permite planejar atualizações e reduzir riscos de manutenção e segurança",
        estudos: ["E01", "E27"]
    },
    {
        id: "R11",
        risco: "Fragilidades na infraestrutura compartilhada de desenvolvimento",
        descricao: "A ausência de modelos de processo padronizados, dificuldades na coleta de requisitos e incerteza em manter padrões de qualidade na infraestrutura de desenvolvimento comprometem a confiabilidade e aumentam a probabilidade de falhas.",
        cenario: "",
        dimensao: "Técnico",
        classeSEI: "Risco de Ambiente de Desenvolvimento",
        elementoSEI: "Sistema de Desenvolvimento",
        desafio: "Sem modelo de processo padronizado (processo)",
        justificativaSEI: "As fragilidades na infraestrutura compartilhada de desenvolvimento decorrem de deficiências no ambiente em que o software é produzido e não de características intrínsecas do produto em si. A classificação como Risco de Ambiente de Desenvolvimento, no elemento Sistema de Desenvolvimento, reflete que o problema reside na ausência de padrões de processo, ferramentas e práticas de qualidade que deveriam estruturar o ambiente compartilhado do ECOS. A falta de padronização do processo agrava as fragilidades ao impedir que boas práticas sejam adotadas de forma consistente pelos participantes.",
        ecos: "Híbrido",
        justificativa: "Ecossistemas híbridos integram componentes e atores de naturezas distintas, código proprietário e aberto, comunidades e empresas, o que dificulta a adoção de modelos de processo padronizados para a infraestrutura compartilhada. Essa heterogeneidade estrutural torna os ECOS híbridos especialmente propensos a fragilidades no ambiente de desenvolvimento, pois cada participante pode operar com práticas e padrões distintos.",
        metrica: "Produtividade; Robustez",
        justificativaMetrica: "Fragilidades na infraestrutura compartilhada comprometem simultaneamente a produtividade e a robustez do ecossistema (Iansiti e Levien, 2004). A produtividade é afetada pela ineficiência gerada pela ausência de padrões, enquanto a robustez é reduzida porque uma infraestrutura frágil aumenta a probabilidade de falhas sistêmicas que podem comprometer a continuidade e a confiabilidade do ECOS.",
        processoValor: "Captura de valor",
        justificativaProcesso: "A infraestrutura compartilhada de desenvolvimento é o substrato técnico que viabiliza a captura de valor no ECOS (Burström et al., 2022). Fragilidades nesse ambiente comprometem a capacidade dos participantes de monetizar e apropriar os benefícios gerados pelo ecossistema, pois a incerteza na qualidade e na confiabilidade dos processos dificulta a consolidação de resultados sustentáveis.",
        solucoes: "S14 (Prática de Robustez da Plataforma): Mitiga vulnerabilidades estruturais e fortalece a arquitetura, o que inclui a infraestrutura",
        estudos: ["E34"]
    },
    {
        id: "R12",
        risco: "Perda de confiança devido a pacotes maliciosos ou enganosos no ecossistema",
        descricao: "Pacotes podem ser rotulados de forma enganosa para ocultar funcionalidades prejudiciais, ou vulnerabilidades podem gerar danos a reputação e a relação de confiança com os usuários e provedores. O risco se intensifica com o crescimento e a distribuição da confiança entre múltiplos atores.",
        cenario: "",
        dimensao: "Social",
        classeSEI: "Risco de Ambiente de Desenvolvimento",
        elementoSEI: "Métodos de Gestão",
        desafio: "Garantia de Qualidade (processo); Gestão de Evolução (arquitetura)",
        justificativaSEI: "A perda de confiança é um risco de natureza sociotécnica que emerge de falhas nos métodos de gestão do ecossistema, especialmente na ausência de mecanismos para identificar, auditar e sinalizar pacotes maliciosos ou enganosos. A classificação no elemento Métodos de Gestão reflete que o problema está na falta de práticas institucionalizadas de garantia de qualidade e gestão da evolução dos pacotes, permitindo que atores mal-intencionados comprometam a reputação e a confiabilidade do ECOS sem que os participantes sejam devidamente alertados.",
        ecos: "Híbrido",
        justificativa: "Em ecossistemas híbridos, a confiança é distribuída entre múltiplos atores com diferentes graus de acesso e responsabilidade. A coexistência de componentes proprietários e abertos dificulta a auditoria unificada dos pacotes, ampliando as oportunidades para que pacotes maliciosos ou enganosos circulem sem detecção adequada e prejudiquem a reputação de fornecedores e plataformas.",
        metrica: "Criação de Nichos; Robustez",
        justificativaMetrica: "A perda de confiança compromete duas dimensões centrais de saúde do ECOS segundo Iansiti e Levien (2004). A criação de nichos é afetada porque a desconfiança desincentiva novos participantes a adotar e contribuir com o ecossistema. A robustez é reduzida porque um ECOS cujos participantes não confiam nos pacotes disponíveis torna-se frágil e propenso ao abandono, comprometendo sua capacidade de sobreviver a perturbações.",
        processoValor: "Captura de valor",
        justificativaProcesso: "A confiança entre os atores é um pré-requisito para que o valor gerado no ECOS seja efetivamente capturado (Burström et al., 2022). Quando pacotes maliciosos ou enganosos minam essa confiança, os participantes passam a questionar a legitimidade das soluções disponíveis, dificultando a adoção, a monetização e a apropriação sustentável dos benefícios do ecossistema.",
        solucoes: "S05 (Framework TrustSECO): Registra fatos de confiança. / S08 (Modelo de Metas e Anti-Metas): Favorece a análise de riscos ligados a motivações maliciosas ou falhas intencionais, o que ajuda a prevenir a perda de confiança.",
        estudos: ["E02", "E13", "E19"]
    },
    {
        id: "R13",
        risco: "Conflitos de interesse na governança do ecossistema (moral hazard)",
        descricao: "Fenômeno de moral hazard (risco moral) onde desenvolvedores se beneficiam da reutilização de bibliotecas, mas transferem os riscos associados ao seu uso para os usuários finais, resultando em uma assimetria de incentivos que compromete a sustentabilidade do ECOS",
        cenario: "",
        dimensao: "Social",
        classeSEI: "Risco de Ambiente de Desenvolvimento",
        elementoSEI: "Processo de Gestão",
        desafio: "Coordenação e Gestão de Desenvolvimento (processo)",
        justificativaSEI: "O moral hazard no ECOS é um risco que emerge do processo de gestão e dos incentivos que estruturam o comportamento dos participantes. A classificação no elemento Processo de Gestão reflete que a assimetria de incentivos, na qual desenvolvedores capturam os benefícios da reutilização sem arcar com os riscos correspondentes, decorre de falhas no design dos processos de governança do ecossistema. Sem mecanismos de gestão que alinhem responsabilidades e incentivos, o risco moral compromete a coordenação e a sustentabilidade do ECOS.",
        ecos: "Híbrido",
        justificativa: "Em ecossistemas híbridos, a coexistência de atores com objetivos comerciais e comunitários distintos cria condições propícias para o surgimento de assimetrias de incentivos. Desenvolvedores que reutilizam bibliotecas em contextos proprietários frequentemente não contribuem para a manutenção dos componentes que utilizam, transferindo os custos e riscos da manutenção para os mantenedores voluntários ou para os usuários finais.",
        metrica: "Produtividade; Criação de Nichos",
        justificativaMetrica: "O moral hazard compromete a produtividade do ecossistema ao criar desincentivos para que desenvolvedores investam na qualidade e na segurança das bibliotecas que reutilizam (Iansiti e Levien, 2004). A criação de nichos também é afetada, pois a assimetria de incentivos desincentiva o surgimento de novos mantenedores dispostos a sustentar componentes críticos sem a devida compensação ou reconhecimento.",
        processoValor: "Captura de valor",
        justificativaProcesso: "O moral hazard afeta diretamente o processo de captura de valor no ECOS (Burström et al., 2022), pois os benefícios da reutilização são capturados de forma assimétrica: desenvolvedores se apropriam do valor sem contribuir proporcionalmente para a sua manutenção. Esse desequilíbrio compromete a sustentabilidade do processo de captura de valor ao longo do tempo, podendo levar ao colapso dos componentes mais reutilizados.",
        solucoes: "S10 (Modelo de Technical Leverage): Indica projetos mais expostos a falhas, expondo o risco do moral hazard. / S15 (Prática de Atrair e Reter Atores): Práticas de governança podem ajudar a mitigar conflitos e alinhar incentivos.",
        estudos: ["E20"]
    },
    {
        id: "R14",
        risco: "Falhas de comunicação entre os múltiplos atores do ecossistema",
        descricao: "Dificuldades enfrentadas por equipes com opiniões divergentes e sem coordenação clara em atingir objetivos comuns. A ausência de diálogo pode resultar em problemas de má gestão, inexperiência das equipes e planejamento deficiente.",
        cenario: "",
        dimensao: "Social",
        classeSEI: "Riscos de Ambiente de Desenvolvimento",
        elementoSEI: "Ambiente de Trabalho",
        desafio: "Não identificado",
        justificativaSEI: "As falhas de comunicação entre atores do ECOS configuram um risco que reside no ambiente de trabalho colaborativo, no contexto em que equipes distribuídas e com objetivos distintos precisam coordenar esforços. A classificação no elemento Ambiente de Trabalho reflete que a ausência de canais e práticas de comunicação eficazes compromete o ambiente social e organizacional do desenvolvimento, gerando desalinhamento, má gestão e planejamento deficiente que afetam a qualidade e a continuidade dos projetos.",
        ecos: "Híbrido",
        justificativa: "Ecossistemas híbridos reúnem atores com diferentes culturas organizacionais, objetivos e graus de comprometimento, o que torna a comunicação entre equipes especialmente complexa. A coexistência de contribuições proprietárias e abertas, combinada com a diversidade de partes interessadas, amplia as oportunidades de divergência e dificulta a construção de consenso e coordenação efetiva.",
        metrica: "Produtividade",
        justificativaMetrica: "Falhas de comunicação impactam diretamente a produtividade do ecossistema (Iansiti e Levien, 2004), pois geram retrabalho, desalinhamento de esforços e planejamento ineficiente. A coordenação entre múltiplos atores é essencial para que o ECOS funcione de forma eficiente; sem ela, os recursos dos participantes são desperdiçados em conflitos e inconsistências que poderiam ser evitados com canais de comunicação adequados.",
        processoValor: "Entrega de valor",
        justificativaProcesso: "A entrega de valor no ECOS (Burström et al., 2022) depende da coordenação eficaz entre os múltiplos atores que contribuem para os projetos. Falhas de comunicação comprometem essa coordenação, resultando em atrasos, inconsistências e entregas de qualidade inferior. Sem diálogo claro e canais formais de comunicação, o processo de entrega de valor torna-se fragmentado e propenso a falhas.",
        solucoes: "S15 (Prática de Atrair e Reter Atores): Fundamental para mitigar conflitos e promover coordenação. / S17 (Prática SLA): Formaliza expectativas e comunicação em contextos como serviço.",
        estudos: ["E07", "E21"]
    },
    {
        id: "R15",
        risco: "Ausência de mecanismos formais de governança no ecossistema",
        descricao: "Inexistência de regras ou estruturas de governança formais, especialmente em ECOS de código aberto, que gera riscos difíceis de controlar e impacta diretamente a sustentabilidade e a segurança do ecossistema.",
        cenario: "",
        dimensao: "Social",
        classeSEI: "Risco de Ambiente de Desenvolvimento",
        elementoSEI: "Processo de Desenvolvimento",
        desafio: "Sem modelos de processo padronizado (processo)",
        justificativaSEI: "A ausência de mecanismos formais de governança é um risco que afeta diretamente o processo de desenvolvimento no ECOS, pois a governança estrutura as regras, os papéis e os fluxos pelos quais as decisões de desenvolvimento são tomadas e executadas. Sem processos padronizados de governança, o desenvolvimento torna-se desordenado e imprevisível, dificultando a identificação e o controle de riscos. O desafio associado e ausência de modelo de processo padronizado, reforça que a lacuna é de natureza processual e organizacional.",
        ecos: "Aberto; Híbrido",
        justificativa: "A ausência de mecanismos formais de governança é especialmente crítica em ecossistemas abertos, onde não há uma autoridade central que defina regras e responsabilidades. Em ecossistemas híbridos, a coexistência de componentes proprietários e abertos também dificulta a consolidação de estruturas de governança unificadas, amplificando os riscos de inconsistência e falta de controle.",
        metrica: "Robustez",
        justificativaMetrica: "A governança formal é um dos pilares da robustez do ecossistema (Iansiti e Levien, 2004), pois fornece os mecanismos pelos quais o ECOS detecta e responde a ameaças à sua sustentabilidade. Na ausência de estruturas de governança, o ecossistema perde capacidade de coordenar respostas a riscos, tornando-se vulnerável a perturbações que poderiam ser mitigadas com regras e processos formalmente estabelecidos.",
        processoValor: "Captura de valor",
        justificativaProcesso: "A governança formal é o mecanismo que regula como os participantes do ECOS se apropriam do valor gerado (Burström et al., 2022). Sem regras e estruturas formais, o processo de captura de valor torna-se incerto e desequilibrado, favorecendo atores que agem oportunisticamente em detrimento da sustentabilidade coletiva do ecossistema.",
        solucoes: "S02 (Framework de Seleção de Fornecedores): Permite estruturar critérios de decisão, reduzindo riscos organizacionais. / S10 (Modelo de Technical Leverage): Fornece métricas para a governança. / S15 (Prática de Atrair e Reter Atores): Trata de práticas de governança. / S17 (Prática SLA): Formaliza regras e expectativas.",
        estudos: ["E09", "E18"]
    },
    {
        id: "R16",
        risco: "Sobrecarga de mantenedores de múltiplos pacotes críticos",
        descricao: "A ausência de remuneração e de processos formais para gerenciar contribuições externas aumenta a carga de trabalho dos mantenedores, arriscando a continuidade dos projetos e ampliando a possibilidade de falhas por sobrecarga.",
        cenario: "",
        dimensao: "Social",
        classeSEI: "Risco de Ambiente de Desenvolvimento",
        elementoSEI: "Processo de Gestão",
        desafio: "Coordenação e Gestão de Desenvolvimento (processo)",
        justificativaSEI: "A sobrecarga de mantenedores é um risco que emerge de deficiências no processo de gestão das contribuições e do trabalho voluntário no ECOS. A ausência de remuneração, de processos formais para triagem de contribuições externas e de mecanismos de reconhecimento sobrecarrega os mantenedores, comprometendo a continuidade dos projetos. A classificação no elemento Processo de Gestão reflete que o risco decorre fundamentalmente de lacunas na coordenação e na gestão do desenvolvimento colaborativo.",
        ecos: "Aberto",
        justificativa: "Em ecossistemas de código aberto, os mantenedores frequentemente atuam sem remuneração e são responsáveis por múltiplos pacotes críticos simultaneamente. A ausência de estruturas formais para distribuir responsabilidades e gerenciar contribuições externas torna o modelo voluntário insustentável em escala, criando condições propícias para a sobrecarga e o eventual abandono dos projetos.",
        metrica: "Produtividade; Criação de Nichos",
        justificativaMetrica: "A sobrecarga de mantenedores reduz a produtividade do ecossistema (Iansiti e Levien, 2004) ao comprometer a capacidade de manutenção e evolução dos pacotes críticos. A criação de nichos também é afetada, pois a sobrecarga desincentiva novos participantes a assumir responsabilidades de manutenção, estreitando a base de contribuidores e dificultando a diversificação e o crescimento do ecossistema.",
        processoValor: "Captura de valor",
        justificativaProcesso: "Os mantenedores são os atores que garantem a qualidade e a continuidade dos componentes pelos quais o valor é capturado no ECOS (Burström et al., 2022). A sobrecarga compromete esse processo ao tornar insustentável o trabalho de manutenção sem o qual os participantes não conseguem se apropriar de forma confiável dos benefícios oferecidos pelo ecossistema.",
        solucoes: "S15 (Prática de Atrair e Reter Atores): Práticas de governança voltadas a atrair e reter participantes são fundamentais para aliviar a carga de trabalho.",
        estudos: ["E12"]
    },
    {
        id: "R17",
        risco: "Dependência crítica de poucos mantenedores (Truck Factor)",
        descricao: "Concentração de conhecimento essencial em poucos indivíduos. O abandono ou indisponibilidade desses colaboradores pode gerar falhas em cascata em bibliotecas dependentes, ameaçando todo o ecossistema.",
        cenario: "",
        dimensao: "Social",
        classeSEI: "Risco de Restrições do Programa",
        elementoSEI: "Contrato",
        desafio: "Atividades de desenvolvimento são altamente dependentes de desenvolvedores terceiros",
        justificativaSEI: "O Truck Factor é classificado como Risco de Restrições do Programa porque a dependência crítica de poucos mantenedores impõe uma restrição estrutural ao programa de desenvolvimento do ECOS: a continuidade dos projetos está condicionada à disponibilidade de indivíduos específicos que não possuem vínculo formal com o ecossistema. O elemento Contrato reflete que essa dependência decorre da ausência de acordos formais que garantam a continuidade do trabalho de manutenção por parte de colaboradores externos.",
        ecos: "ECOS sem fins lucrativos",
        justificativa: "Ecossistemas sem fins lucrativos dependem fundamentalmente de contribuições voluntárias e não remuneradas, o que torna a concentração de conhecimento em poucos mantenedores um risco estrutural. Sem incentivos financeiros ou contratuais que distribuam as responsabilidades de manutenção, esses ecossistemas são especialmente vulneráveis ao impacto do abandono ou indisponibilidade de seus colaboradores mais críticos.",
        metrica: "Robustez",
        justificativaMetrica: "O Truck Factor ameaça diretamente a robustez do ecossistema (Iansiti e Levien, 2004), pois a concentração de conhecimento essencial em poucos indivíduos cria pontos únicos de falha. Quando esses mantenedores se tornam indisponíveis, o ecossistema perde capacidade de manter e evoluir seus componentes críticos, reduzindo sua resiliência a perturbações e comprometendo sua sobrevivência no longo prazo.",
        processoValor: "Criação de valor",
        justificativaProcesso: "Os mantenedores centrais são os responsáveis pela criação e pela evolução dos artefatos que sustentam o valor do ECOS (Burström et al., 2022). A dependência crítica de poucos indivíduos fragiliza o processo de criação de valor, pois a capacidade de inovar, corrigir e evoluir os componentes do ecossistema fica concentrada em pontos vulneráveis que, se removidos, podem paralisar esse processo de forma abrupta.",
        solucoes: "S15 (Prática de Atrair e Reter Atores): A retenção e o apoio a colaboradores mitigam o risco de abandono ou indisponibilidade de mantenedores-chave",
        estudos: ["E08"]
    },
    {
        id: "R18",
        risco: "Ameaças de insiders maliciosos no ecossistema",
        descricao: "Envolve desenvolvedores insatisfeitos ou mal-intencionados que comprometem deliberadamente pacotes, criando vulnerabilidades intencionais. O risco é difícil de detectar e mitigar por envolver atores internos com acesso privilegiado.",
        cenario: "",
        dimensao: "Social",
        classeSEI: "Risco de Ambiente de Desenvolvimento",
        elementoSEI: "Processo de Gestão",
        desafio: "Coordenação e Gestão de Desenvolvimento (processo)",
        justificativaSEI: "As ameaças de insiders maliciosos emergem de falhas no processo de gestão de acesso e de contribuições no ambiente de desenvolvimento do ECOS. A classificação no elemento Processo de Gestão reflete que o risco decorre da ausência de mecanismos formais de controle, auditoria e verificação das ações de atores internos com acesso privilegiado. Sem processos de gestão que monitorem e restrinjam o comportamento de contribuidores, o ECOS torna-se vulnerável a ações deliberadamente maliciosas que são difíceis de detectar e mitigar.",
        ecos: "Aberto",
        justificativa: "Ecossistemas de código aberto concedem acesso privilegiado a um conjunto potencialmente amplo de contribuidores, muitos dos quais não possuem vínculos formais ou passam por processos rigorosos de verificação de identidade e intenção. Essa abertura estrutural torna os ECOS abertos especialmente vulneráveis a ameaças de insiders, pois desenvolvedores insatisfeitos ou mal-intencionados podem explorar seu acesso ao código e aos pipelines de distribuição para comprometer pacotes críticos.",
        metrica: "Robustez",
        justificativaMetrica: "Ameaças de insiders maliciosos comprometem a robustez do ecossistema (Iansiti e Levien, 2004) ao introduzir vulnerabilidades intencionais que são particularmente difíceis de detectar e mitigar. Por envolver atores com acesso privilegiado e conhecimento específico do projeto, esse tipo de ataque pode comprometer componentes centrais do ECOS de forma silenciosa, reduzindo significativamente a resiliência do ecossistema a ameaças internas.",
        processoValor: "Criação de valor",
        justificativaProcesso: "As ameaças de insiders afetam diretamente o processo de criação de valor (Burström et al., 2022), pois os próprios atores que deveriam contribuir para a construção e evolução dos artefatos do ECOS passam a ser vetores de dano. Vulnerabilidades intencionais introduzidas por insiders comprometem a integridade dos componentes criados, inviabilizando sua utilização segura e minando a confiança no processo de criação coletiva de valor.",
        solucoes: "S05 (Framework TrustSECO): Registra fatos de confiança. / S08 (Modelo de Metas e Anti-Metas): Ajuda a analisar riscos ligados a motivações maliciosas. / S16 (Prática de Mecanismos de Segurança): Adoção de mecanismos como controle de permissões e auditoria previne uploads maliciosos",
        estudos: ["E19"]
    },
    {
        id: "R19",
        risco: "Ausência ou deficiência de documentação das plataformas",
        descricao: "A falta de documentação adequada (e.g., javadoc ou arquivos obrigatórios) ou documentações incompletas/pouco claras dificulta o trabalho dos desenvolvedores, reduz a percepção de riscos (e.g., inserção de modelos maliciosos) e compromete a validação de propostas e a segurança.",
        cenario: "",
        dimensao: "Negócio",
        classeSEI: "Risco de Ambiente de Desenvolvimento",
        elementoSEI: "Processo de Desenvolvimento",
        desafio: "Sem modelo de processo padronizado (processo)",
        justificativaSEI: "A ausência ou deficiência de documentação é um risco que emerge do processo de desenvolvimento do ECOS, pois a documentação é um produto direto e um requisito implícito desse processo. Sem padrões que orientem a produção de documentação completa e adequada, os desenvolvedores enfrentam barreiras no uso das plataformas e ficam expostos a riscos de segurança que poderiam ser mitigados por documentação clara. A classificação no elemento Processo de Desenvolvimento reflete que a padronização documental deve ser incorporada ao próprio fluxo de desenvolvimento.",
        ecos: "Híbrido",
        justificativa: "Em ecossistemas híbridos, a diversidade de atores e a coexistência de componentes proprietários e abertos tornam a padronização e a consistência da documentação especialmente desafiadoras. A ausência de requisitos documentais obrigatórios e de processos unificados de revisão resulta em documentações fragmentadas ou incompletas, comprometendo a usabilidade e a segurança da plataforma para todos os participantes.",
        metrica: "Produtividade; Criação de Nichos",
        justificativaMetrica: "A ausência de documentação adequada reduz a produtividade do ecossistema (Iansiti e Levien, 2004) ao aumentar o custo de entrada e de uso das plataformas para novos desenvolvedores. A criação de nichos também é comprometida, pois desenvolvedores que encontram documentação insuficiente têm menos incentivos para adotar e contribuir com o ECOS, reduzindo a diversidade e o crescimento do ecossistema.",
        processoValor: "Criação e entrega de valor",
        justificativaProcesso: "A documentação é um insumo essencial tanto para a criação quanto para a entrega de valor no ECOS (Burström et al., 2022). Sem ela, os desenvolvedores não conseguem utilizar adequadamente as plataformas para criar novos artefatos, nem os usuários finais conseguem compreender e apropriar corretamente as soluções entregues, comprometendo ambos os processos de forma simultânea.",
        solucoes: "S21 (Método de Apoio à Decisão Multicritério): A análise conjunta de requisitos de mercado e de engenharia pode mitigar riscos de integração causados pela falta de clareza.",
        estudos: ["E09", "E15", "E18", "E28"]
    },
    {
        id: "R20",
        risco: "Altos custos de manutenção e risco de migração para plataformas concorrentes",
        descricao: "A perda de clientes para soluções alternativas é um risco significativo, geralmente associado à ausência de suporte ou manutenção. O provedor da plataforma (keystone) deve gerenciar a fidelidade e reduzir os custos de mudança.",
        cenario: "",
        dimensao: "Negócio",
        classeSEI: "Risco de Restrições do Programa",
        elementoSEI: "Recursos",
        desafio: "Não identificado",
        justificativaSEI: "Os altos custos de manutenção e o risco de migração são classificados como Risco de Restrições do Programa porque impõem limitações de ordem econômica e estratégica a sustentabilidade do ECOS. A classificação no elemento Recursos reflete que o problema central é a alocação insuficiente ou ineficiente de recursos para manutenção e suporte, o que leva participantes a considerarem a migração para plataformas concorrentes. Trata-se de uma restrição externa ao desenvolvimento que condiciona a viabilidade do programa de engenharia do ecossistema.",
        ecos: "Aberto",
        justificativa: "Em ecossistemas de código aberto, o provedor da plataforma frequentemente enfrenta dificuldades para garantir suporte e manutenção sustentáveis sem modelos de receita estabelecidos. A ausência de mecanismos formais de monetização e de fidelização dos participantes torna esses ecossistemas especialmente vulneráveis à perda de clientes para plataformas concorrentes que ofereçam suporte mais estruturado.",
        metrica: "Produtividade",
        justificativaMetrica: "Os altos custos de manutenção reduzem a produtividade do ecossistema (Iansiti e Levien, 2004) ao consumir recursos que poderiam ser investidos em inovação e evolução da plataforma. O risco de migração agrava esse cenário ao ameaçar a base de participantes do ECOS, reduzindo a escala e a eficiência que sustentam a produtividade coletiva do ecossistema.",
        processoValor: "Captura de valor",
        justificativaProcesso: "A retenção de participantes e a gestão dos custos de mudança são dimensões centrais do processo de captura de valor no ECOS (Burström et al., 2022). Quando os custos de manutenção são elevados e o risco de migração aumenta, o keystone perde capacidade de sustentar e ampliar sua base de participantes, comprometendo a apropriação contínua dos benefícios gerados pelo ecossistema.",
        solucoes: "S02 (Framework de Seleção de Fornecedores): Reduz riscos organizacionais e alinha decisões. / S14 (Prática de Robustez da Plataforma): Evita falhas que levam à migração. / S15 (Prática de Atrair e Reter Atores): Aumenta a fidelidade dos clientes",
        estudos: ["E01", "E29"]
    },
    {
        id: "R21",
        risco: "Percepção de valor insuficiente para adesão e permanência no ECOS",
        descricao: "O fracasso do ECOS em oferecer valor claro aos participantes leva ao abandono. Mesmo quando há reconhecimento de valor, a incerteza quanto à realização do valor esperado aumenta o risco de insucesso.",
        cenario: "",
        dimensao: "Negócio",
        classeSEI: "Risco de Restrições do Programa",
        elementoSEI: "Contrato",
        desafio: "Atividades de desenvolvimento são dependentes de desenvolvedores terceiros",
        justificativaSEI: "A percepção de valor insuficiente é classificada como Risco de Restrições do Programa porque a incapacidade de demonstrar valor claro aos participantes impõe uma restrição fundamental à sustentabilidade do ECOS: sem valor percebido, não há adesão nem permanência. O elemento Contrato reflete que a relação entre o ECOS e seus participantes é condicionada por expectativas implícitas e explícitas de valor; quando essas expectativas não são atendidas, os vínculos que sustentam o ecossistema se desfazem.",
        ecos: "Híbrido",
        justificativa: "Em ecossistemas híbridos, os participantes avaliam continuamente o valor recebido em relação ao esforço e aos recursos investidos em sua participação. A coexistência de interesses comerciais e comunitários torna especialmente complexo comunicar e demonstrar valor de forma consistente para todos os tipos de participantes, aumentando o risco de que grupos específicos percebam a participação como desvantajosa e optem pelo abandono.",
        metrica: "Criação de Nichos",
        justificativaMetrica: "A percepção de valor insuficiente compromete diretamente a criação de nichos no ecossistema (Iansiti e Levien, 2004), pois inibe a adesão de novos participantes e a diversificação das contribuições. Quando os atores não percebem valor claro em sua participação, o ECOS perde capacidade de atrair e reter os participantes especializados que sustentam a vitalidade e a inovação do ecossistema.",
        processoValor: "Captura de valor",
        justificativaProcesso: "A percepção de valor é o elemento central que motiva e legitima o processo de captura de valor no ECOS (Burström et al., 2022). Quando os participantes não percebem valor suficiente para justificar sua adesão ou permanência, o processo de captura de valor colapsa: sem participantes engajados, o ecossistema perde a base sobre a qual os benefícios são gerados e apropriados.",
        solucoes: "S02 (Framework de Seleção de Fornecedores): Ajuda a estruturar critérios de decisão sobre investimentos, alinhando a percepção de valor. / S15 (Prática de Atrair e Reter Atores): Práticas para reter participantes mitigam o abandono. / S21 (Método de Apoio à Decisão Multicritério): Ajuda a antecipar riscos e apoiar decisões estratégicas mais seguras",
        estudos: ["E04", "E06"]
    },
    {
        id: "R22",
        risco: "Perda de controle da plataforma ou fragmentação do ecossistema",
        descricao: "Falhas em um único serviço podem paralisar toda a operação. O risco é ampliado em ECOS de código aberto onde desenvolvedores externos podem modificar diretamente a plataforma, gerando fragmentação.",
        cenario: "",
        dimensao: "Negócio",
        classeSEI: "Risco de Ambiente de Desenvolvimento",
        elementoSEI: "Sistema de Desenvolvimento",
        desafio: "Sem modelo de processo padronizado (processo)",
        justificativaSEI: "A perda de controle da plataforma ou a fragmentação do ecossistema são riscos que emergem do sistema de desenvolvimento do ECOS, especificamente da ausência de padrões e mecanismos de controle que garantam a coerência e a integridade da plataforma ao longo do tempo. A classificação no elemento Sistema de Desenvolvimento reflete que o problema reside na arquitetura e nos processos que governam como o sistema é construído e evoluído, permitindo que modificações externas não controladas gerem inconsistências e fragmentação.",
        ecos: "Híbrido",
        justificativa: "Ecossistemas híbridos são especialmente vulneráveis à fragmentação porque combinam componentes proprietários, que tendem a ser mais controlados com componentes abertos, que podem ser modificados por desenvolvedores externos sem supervisão centralizada. Essa dualidade torna difícil manter a coerência e o controle da plataforma, aumentando o risco de que ramificações não coordenadas gerem fragmentação que comprometa a unidade do ecossistema.",
        metrica: "Robustez; Criação de Nichos",
        justificativaMetrica: "A fragmentação do ecossistema compromete a robustez (Iansiti e Levien, 2004) ao criar inconsistências estruturais que reduzem a capacidade do ECOS de funcionar de forma coesa diante de perturbações. A criação de nichos também é afetada, pois a fragmentação dificulta a interoperabilidade e a colaboração entre participantes, desincentivando a especialização e a diversificação que enriquecem o ecossistema.",
        processoValor: "Criação e entrega de valor",
        justificativaProcesso: "A integridade e o controle da plataforma são pré-requisitos para que o ECOS crie e entregue valor de forma consistente (Burström et al., 2022). A fragmentação compromete ambos os processos: a criação de valor é prejudicada pela incoerência entre componentes, enquanto a entrega é afetada pela impossibilidade de garantir uma experiência uniforme e confiável para todos os participantes do ecossistema.",
        solucoes: "S04 (Framework de Variabilidade): Demonstra que mecanismos de variabilidade ajudam a reduzir riscos de inconsistências e fragmentação. / S14 (Prática de Robustez da Plataforma): Assegurar a robustez da arquitetura evita a paralisação por falha em serviço único.",
        estudos: ["E25", "E28"]
    },
    {
        id: "R23",
        risco: "Fracasso em fases iniciais de implantação do ECOS",
        descricao: "Falhas no design do produto mínimo viável (MVP) reduzem a atratividade para clientes e comprometem o engajamento dos participantes nas fases iniciais, aumentando as chances de riscos.",
        cenario: "",
        dimensao: "Negócio",
        classeSEI: "Risco de Engenharia de Produto",
        elementoSEI: "Requisitos",
        desafio: "Engenharia de Requisitos (processo)",
        justificativaSEI: "O fracasso nas fases iniciais de implantação do ECOS decorre de falhas na definição e na validação dos requisitos do produto mínimo viável (MVP). Um MVP mal definido não atende às necessidades dos clientes e falha em engajar os participantes, comprometendo a viabilidade do ecossistema antes mesmo que ele se consolide. A classificação no elemento Requisitos reflete que a origem do risco está na etapa de engenharia de requisitos, onde as necessidades dos clientes e os critérios de valor do MVP devem ser adequadamente elicitados e validados.",
        ecos: "Aberto",
        justificativa: "Em ecossistemas abertos, as fases iniciais de implantação são particularmente críticas porque o engajamento de participantes voluntários depende da percepção imediata de valor e utilidade da plataforma. Sem uma proposta de valor clara e um MVP bem estruturado, os potenciais participantes que não têm obrigações contratuais de adoção, tendem a não se engajar, comprometendo o crescimento inicial do ecossistema.",
        metrica: "Criação de Nichos",
        justificativaMetrica: "O fracasso nas fases iniciais de implantação compromete diretamente a criação de nichos no ecossistema (Iansiti e Levien, 2004), pois impede que os primeiros participantes se estabeleçam e criem as bases para o crescimento do ECOS. Sem um MVP que atraia e engaje participantes iniciais, o ecossistema não consegue atingir a massa crítica necessária para que nichos especializados se desenvolvam.",
        processoValor: "Captura de valor",
        justificativaProcesso: "As fases iniciais de implantação são determinantes para o processo de captura de valor no ECOS (Burström et al., 2022), pois é nesse momento que os fundamentos da proposta de valor são estabelecidos e testados. O fracasso nessa etapa impede que o ecossistema consolide sua proposta de valor e inicia um ciclo de baixo engajamento que compromete a viabilidade da captura de valor no longo prazo.",
        solucoes: "S21 (Método de Apoio à Decisão Multicritério): Pode apoiar decisões estratégicas mais seguras, o que é crítico no design do Produto Mínimo Viável (MVP).",
        estudos: ["E04"]
    },
    {
        id: "R24",
        risco: "Descontinuidade ou morte do ecossistema",
        descricao: "Ocorre devido a ausência de conhecimento sobre as peculiaridades dos ECOS, aliada a falta de mecanismos de governança, o que pode levar à obsolescência e, em última instância, à extinção do ECOS",
        cenario: "",
        dimensao: "Negócio",
        classeSEI: "Risco de Ambiente de Desenvolvimento",
        elementoSEI: "Processo de Desenvolvimento",
        desafio: "Sem modelo de processo padronizado (processo)",
        justificativaSEI: "A descontinuidade ou morte do ecossistema representa o risco mais abrangente do ECOS, resultante do acúmulo de falhas no processo de desenvolvimento e na governança ao longo do tempo. A classificação no elemento Processo de Desenvolvimento reflete que a ausência de processos padronizados e de mecanismos de governança adequados, que deveriam orientar o ciclo de vida do ecossistema, é a principal causa raiz desse risco. Sem processos que garantam a sustentabilidade e a evolução contínua do ECOS, a obsolescência e a extinção tornam-se desfechos inevitáveis.",
        ecos: "Aberto",
        justificativa: "Ecossistemas de código aberto são especialmente vulneráveis a descontinuidade porque dependem de contribuições voluntárias e de modelos de governança informais que, na ausência de mecanismos formais de sustentação, tendem a se deteriorar com o tempo. A falta de estruturas institucionais que garantam a continuidade do ECOS torna esses ecossistemas propensos à obsolescência quando o interesse ou a capacidade dos mantenedores diminui.",
        metrica: "Robustez",
        justificativaMetrica: "A descontinuidade ou morte do ecossistema representa a falha total da robustez do ECOS (Iansiti e Levien, 2004). A robustez mede a capacidade do ecossistema de sobreviver a perturbações; sua ausência completa , evidenciada pela extinção do ECOS, indica que o sistema falhou em desenvolver os mecanismos necessários para resistir às pressões acumuladas ao longo do tempo. Prevenir esse risco é, portanto, o objetivo final da gestão da robustez do ecossistema.",
        processoValor: "Captura de valor",
        justificativaProcesso: "A descontinuidade do ECOS inviabiliza permanentemente o processo de captura de valor (Burström et al., 2022), pois extingue a plataforma que viabilizava a criação, entrega e apropriação dos benefícios por seus participantes. A morte do ecossistema representa a falha irreversível de todos os processos de valor, tornando este o risco de negócio mais crítico e de maior impacto para todos os atores envolvidos.",
        solucoes: "S15 (Prática de Atrair e Reter Atores): A ausência de mecanismos de governança pode levar à extinção. A retenção de participantes é crucial para a sustentabilidade",
        estudos: ["E18"]
    }
];

const container = document.getElementById('riscosContainer');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.btn-filter');

let riscoAtualIndex = 0;
let listaAtiva = [];
let dimensaoAtual = 'tecnicos'; // rastreia a cor da dimensão do risco aberto

function openRiskDetails(id) {
    const index = dadosRiscos.findIndex(r => r.id === id);
    if (index === -1) return;
    riscoAtualIndex = index;
    listaAtiva = dadosRiscos;
    renderizarPainel(dadosRiscos[index]);
}

function navegarRisco(direcao) {
    const novoIndex = riscoAtualIndex + direcao;
    if (novoIndex < 0 || novoIndex >= listaAtiva.length) return;
    riscoAtualIndex = novoIndex;
    renderizarPainel(listaAtiva[riscoAtualIndex]);
}

function renderizarPainel(item) {
    if (!item) return;

    // — Cabeçalho —
    document.getElementById('riskId').innerText = item.id;
    document.getElementById('riskTitle').innerText = item.risco;
    document.getElementById('riskCenario').innerText = item.descricao || '';

    const riskDimTag = document.getElementById('riskDim');
    riskDimTag.innerText = item.dimensao;

    // — Cores dinâmicas —
    const sidePanel = document.getElementById('sidePanel');
    sidePanel.classList.remove('tecnicos', 'sociais', 'negocio');
    riskDimTag.classList.remove('tecnicos', 'sociais', 'negocio');

    const dim = item.dimensao.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const classeCor = dim.includes("tecnico") ? "tecnicos" : dim.includes("social") ? "sociais" : "negocio";
    sidePanel.classList.add(classeCor);
    riskDimTag.classList.add(classeCor);
    dimensaoAtual = classeCor; // salva para uso no modal de ajuda

    // — Bloco 1: Análise SEI —
    document.getElementById('riskClassSEI').innerText = item.classeSEI || '—';
    document.getElementById('riskElementoSEI').innerText = item.elementoSEI || '—';
    document.getElementById('riskDesafio').innerText = item.desafio || '—';

    const justBox = document.getElementById('riskJustificationBox');
    const justText = document.getElementById('riskJustification');
    // justificativaSEI é o campo específico da classificação SEI
    const justSEI = item.justificativaSEI || '';
    if (justSEI.trim()) {
        justText.innerText = justSEI.trim();
        justBox.style.display = 'block';
    } else {
        justBox.style.display = 'none';
    }

    // — Bloco 2a: ECOS —
    document.getElementById('riskEcos').innerText = item.ecos || '—';
    const ecosJustBox = document.getElementById('riskEcosJustBox');
    const ecosJust = document.getElementById('riskEcosJust');
    if (item.justificativa && item.justificativa.trim()) {
        ecosJust.innerText = item.justificativa.trim();
        ecosJustBox.style.display = 'block';
    } else {
        ecosJustBox.style.display = 'none';
    }

    // — Bloco 2b: Métrica —
    document.getElementById('riskMetric').innerText = item.metrica || '—';
    const metricJustBox = document.getElementById('riskMetricJustBox');
    const metricJust = document.getElementById('riskMetricJust');
    if (item.justificativaMetrica && item.justificativaMetrica.trim()) {
        metricJust.innerText = item.justificativaMetrica.trim();
        metricJustBox.style.display = 'block';
    } else {
        metricJustBox.style.display = 'none';
    }

    // — Bloco 2c: Processo de Valor —
    document.getElementById('riskProcesso').innerText = item.processoValor || '—';
    const processoJustBox = document.getElementById('riskProcessoJustBox');
    const processoJust = document.getElementById('riskProcessoJust');
    if (item.justificativaProcesso && item.justificativaProcesso.trim()) {
        processoJust.innerText = item.justificativaProcesso.trim();
        processoJustBox.style.display = 'block';
    } else {
        processoJustBox.style.display = 'none';
    }

    // — Bloco 3: Soluções —
    const solContainer = document.getElementById('riskSolutions');
    solContainer.innerHTML = '';
    if (item.solucoes) {
        item.solucoes.split('/').forEach(sol => {
            const s = sol.trim();
            if (!s) return;
            const match = s.match(/^(S\d+)\s*\(([^)]+)\)\s*[:\-]?\s*(.*)$/i);
            const div = document.createElement('div');
            div.className = 'solution-item';
            if (match) {
                const sId = match[1].trim();       // ex: S01
                const sNome = match[2].trim();     // ex: Framework HIN; Metapath2Vec
                const sDesc = match[3].trim();
                const solInfo = solucoesMapa[sId];
                const nomeFinal = solInfo ? solInfo.nome : sNome;
                const linkDOI = solInfo && solInfo.doi
                    ? `<a href="${solInfo.doi}" target="_blank" rel="noopener" class="btn-ver-publicacao" title="Acessar publicação da solução">
                           <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                           Acessar estudo
                       </a>`
                    : '';
                div.innerHTML = `
                    <div class="solution-entry-info">
                        <span class="solution-name">${nomeFinal}</span>
                        <span class="solution-desc">${sDesc}</span>
                    </div>
                    ${linkDOI}
                `;
            } else {
                div.innerHTML = `<div class="solution-entry-info"><span class="solution-desc">${s}</span></div>`;
            }
            solContainer.appendChild(div);
        });
    }

    // — Bloco 4: Estudos Primários —
    const studiesBlock = document.getElementById('primaryStudiesBlock');
    const studiesContainer = document.getElementById('riskStudies');
    if (item.estudos && item.estudos.length) {
        studiesContainer.innerHTML = '';
        item.estudos.forEach(eId => {
            const info = estudosMapa[eId];
            const div = document.createElement('div');
            div.className = 'study-entry';
            if (info) {
                const autoresAno = info.autores && info.ano ? `${info.autores} (${info.ano})` : (info.autores || info.ano || '');
                const labelCompleto = autoresAno ? `${info.titulo} – ${autoresAno}` : info.titulo;
                const acessarBtn = info.doi
                    ? `<a href="${info.doi}" target="_blank" rel="noopener" class="btn-acessar-artigo" title="Abrir artigo original em nova aba">
                           <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                           Acessar estudo
                       </a>`
                    : '';
                div.innerHTML = `
                    <div class="study-entry-info">
                        <span class="study-entry-title">${labelCompleto}</span>
                    </div>
                    ${acessarBtn}
                `;
            } else {
                div.innerHTML = `<div class="study-entry-info"><span class="study-entry-code">${eId}</span></div>`;
            }
            studiesContainer.appendChild(div);
        });
        studiesBlock.style.display = 'block';
    } else {
        studiesBlock.style.display = 'none';
    }

    // — Navegação —
    const total = listaAtiva.length;
    document.getElementById('navCount').innerText = `${riscoAtualIndex + 1} de ${total}`;
    document.getElementById('btnAnterior').disabled = riscoAtualIndex === 0;
    document.getElementById('btnProximo').disabled = riscoAtualIndex === total - 1;

    // — Abrir painel —
    sidePanel.classList.add('active');
    document.getElementById('overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
    // Scroll topo do body interno
    const body = sidePanel.querySelector('.panel-body');
    if (body) body.scrollTop = 0;
}

function closeSidePanel() {
    document.getElementById('sidePanel').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function exibirRiscos(lista) {
    if (!container) return;
    container.innerHTML = "";

    if (lista.length === 0) {
        container.innerHTML = `<p class="no-results">Nenhum risco encontrado.</p>`;
        return;
    }

    lista.forEach(item => {
        const card = document.createElement('div');
        const rawDim = item.dimensao.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const classeCSS = rawDim.endsWith('s') ? rawDim.slice(0, -1) : rawDim;
        
        card.className = `card ${classeCSS}`;

        // Cor do botão conforme dimensão
        const btnColorMap = {
            tecnico: { bg: 'rgba(56,189,248,0.12)', border: 'rgba(56,189,248,0.35)', color: '#38bdf8' },
            social:  { bg: 'rgba(251,191,36,0.12)',  border: 'rgba(251,191,36,0.35)',  color: '#fbbf24' },
            negocio: { bg: 'rgba(74,222,128,0.12)',  border: 'rgba(74,222,128,0.35)',  color: '#4ade80' },
        };
        const btnStyle = btnColorMap[classeCSS] || btnColorMap.tecnico;

        card.innerHTML = `
            <div class="card-header">
                <span class="id-tag">${item.id}</span>
                <span class="dimensao-tag">${item.dimensao}</span>
            </div>
            <div class="card-main-content">
                <h3>${item.risco}</h3>
                <p class="descricao">${item.descricao.substring(0, 120)}...</p>
                <button class="btn-ver-mais" style="background:${btnStyle.bg};border:1px solid ${btnStyle.border};color:${btnStyle.color};">Ver análise completa →</button>
            </div>
        `;
        card.onclick = () => openRiskDetails(item.id);
        container.appendChild(card);
    });
}

function configurarEventos() {
    searchInput?.addEventListener('input', (e) => {
        const termo = e.target.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const filtrados = dadosRiscos.filter(r => 
            r.risco.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(termo) || 
            r.id.toLowerCase().includes(termo)
        );
        exibirRiscos(filtrados);
    });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.btn-filter.active')?.classList.remove('active');
            btn.classList.add('active');
            
            const filtro = btn.getAttribute('data-filter');
            if (filtro === 'todos') {
                exibirRiscos(dadosRiscos);
            } else {
                const filtrados = dadosRiscos.filter(r => {
                    const dRisco = r.dimensao.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").substring(0, 5);
                    const dFiltro = filtro.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").substring(0, 5);
                    return dRisco === dFiltro;
                });
                exibirRiscos(filtrados);
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    exibirRiscos(dadosRiscos);
    configurarEventos();

    // Aplica filtro salvo ao vir da página "Como utilizar"
    const filtroSalvo = localStorage.getItem('ecos-filter');
    if (filtroSalvo) {
        localStorage.removeItem('ecos-filter'); // limpa após aplicar

        const btnAlvo = document.querySelector(`.btn-filter[data-filter="${filtroSalvo}"]`);
        if (btnAlvo) {
            btnAlvo.click();
            // Scroll suave até o catálogo
            setTimeout(() => {
                const catalogo = document.getElementById('catalogo');
                if (catalogo) catalogo.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }

    // Fechar modal de ajuda com tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') fecharAjuda();
    });
})

/* ══════════════════════════════════════════
   AJUDA CONTEXTUAL — conteúdo e lógica
══════════════════════════════════════════ */

const ajudaConteudo = {
    sei: {
        titulo: "Classificação do Risco de acordo com a Taxonomia de Risco SEI",
        texto: "A Taxonomia de Risco do SEI (Software Engineering Institute) fornece uma estrutura padronizada para identificar e categorizar riscos em projetos de software. Ela organiza as ameaças em classes, elementos e desafios, estabelecendo uma linguagem comum que facilita a comunicação entre equipes e a análise comparativa entre projetos, este campo indica a categoria onde o risco se enquadra.",
        fonte: "Fonte: Software Ecosystems Risks – Manalif et al. (2013)"
    },
    ecos: {
        titulo: "Tipo de ECOS mais propício ao Risco",
        texto: "Os riscos não se manifestam da mesma forma em todos os cenários. Este campo identifica em qual tipo de ECOS este risco é mais frequente, utilizando a tipologia de Manikas (2016).",
        fonte: "Fonte: Revisiting software ecosystems research: A longitudinal literature study – Manikas (2016)"
    },
    metrica: {
        titulo: "Métricas de Saúde do ECOS atingida pelo Risco",
        texto: "Este campo identifica o impacto do risco na saúde do ecossistema, utilizando os indicadores propostos por Iansiti e Levien (2004). O risco pode afetar a Produtividade do sistema, sua Robustez frente a mudanças ou sua capacidade de gerar novos Nichos de Criação (inovação). Identificar essa métrica ajuda a priorizar ações de mitigação estratégicas.",
        fonte: "Fonte: Fonte: Strategy as Ecology – Iansiti e Levien (2004)"
    },
    processo: {
        titulo: "Processo de Valor do ECOS Ameaçado pelo Risco",
        texto: "Com base no modelo de Burström et al. (2022), este campo sinaliza qual dimensão do ecossistema o risco ameaça diretamente: a criação (desenvolvimento), a entrega (disponibilização) e a captura de valor (retorno financeiro ou reputacional). Esses processos compõem o ciclo vital para a sustentabilidade do ECOS",
        fonte: "Fonte: Software ecosystems now and in the future: A definition, systematic literature review, and integration into the business and digital ecosystem literature — Burström et al. (2022)"
    },
    solucoes: {
        titulo: "Soluções Identificadas na Literatura",
        texto: "Apresentamos as estratégias de mitigação identificadas por meio do MSL. Cada solução, seja ela um framework, modelo, ferramenta ou método, foi proposta e/ou validada. Utilize o botão 'Acessar estudo' para consultar a fundamentação completa no estudo primário.",
        fonte: "Fonte: Challenges and Solutions of Risk Management in Software Ecosystems- Campos et al. (2025)"
    },
    estudos: {
        titulo: "Estudos Primários que Identificaram este Risco",
        texto: "Estes são os estudos que fundamentam a identificação deste risco em nossa base de evidências. Clique em 'Acessar estudo' para consultar a estudo primário",
        fonte: "Fonte: Challenges and Solutions of Risk Management in Software Ecosystems- Campos et al. (2025)"
    }
};

function abrirAjuda(chave) {
    const conteudo = ajudaConteudo[chave];
    if (!conteudo) return;

    document.getElementById('helpModalTitle').textContent = conteudo.titulo;
    document.getElementById('helpModalBody').textContent  = conteudo.texto;
    document.getElementById('helpModalSource').textContent = conteudo.fonte || '';

    // Aplica cor da dimensão ao título e ícone do modal
    const corMap = {
        tecnicos: 'var(--color-tecnicos)',
        sociais:  'var(--color-sociais)',
        negocio:  'var(--color-negocio)'
    };
    const cor = corMap[dimensaoAtual] || 'var(--accent)';
    const title = document.getElementById('helpModalTitle');
    const icon  = document.querySelector('#helpModal .help-modal-icon');
    title.style.color = cor;
    if (icon) {
        icon.style.color = cor;
        icon.style.background = `color-mix(in srgb, ${cor} 12%, transparent)`;
        icon.style.borderColor = `color-mix(in srgb, ${cor} 30%, transparent)`;
    }

    const modal = document.getElementById('helpModal');
    modal.classList.add('active');
    // Foco no botão de fechar para acessibilidade
    setTimeout(() => modal.querySelector('.help-modal-close')?.focus(), 50);
}

function fecharAjuda() {
    document.getElementById('helpModal').classList.remove('active');
}

function fecharAjudaOverlay(event) {
    // Fecha apenas se clicou no overlay (fundo escuro), não na caixa
    if (event.target === document.getElementById('helpModal')) {
        fecharAjuda();
    }
}
