// ── Menu de navegação (hamburguer mobile) ──
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('open');
    document.getElementById('hamburger').classList.toggle('active');
}
function closeMenu() {
    document.getElementById('navLinks').classList.remove('open');
    document.getElementById('hamburger').classList.remove('active');
}

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
    "E07": { titulo: "A Cast of Thousands: How the IDEAS Productivity Project Has Advanced Software Productivity and Sustainability", autores: "McInnes et al.", ano: "2024", doi: "https://doi.org/10.1109/MCSE.2024.3383799" },
    "E08": { titulo: "Modeling Interconnected Social and Technical Risks in Open Source Software Ecosystems", autores: "Schueller e Wachs", ano: "2024", doi: "https://doi.org/10.1177/26339137241231912" },
    "E09": { titulo: "Maven Unzipped: Exploring the Impact of Library Packaging on the Ecosystem", autores: "Keshani et al.", ano: "2024", doi: "https://doi.org/10.1109/ICSME58944.2024.00016" },
    "E10": { titulo: "Lessons from the Long Tail: Analysing Unsafe Dependency Updates across Software Ecosystems", autores: "Wattanakriengkrai et al.", ano: "2023", doi: "https://doi.org/10.1145/3611643.3613086" },
    "E11": { titulo: "On the Discoverability of NPM Vulnerabilities in Node.js Projects", autores: "Alfadel et al.", ano: "2023", doi: "https://doi.org/10.1145/3571848" },
    "E12": { titulo: "Understanding the Role of External Pull Requests in the NPM Ecosystem", autores: "Maeprasart et al", ano: "2023", doi: "https://doi.org/10.1007/s10664-023-10315-w" },
    "E13": { titulo: "Vulnerability Management in Linux Distributions: An Empirical Study on Debian and Fedora", autores: "Lin et al.", ano: "2023", doi: "https://doi.org/10.1007/s10664-022-10267-7" },
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
    "E28": { titulo: "Towards a Multi-criteria Decision Support Method for Consumer Electronics Software Ecosystems", autores: "Hartmann e Bosch", ano: "2016", doi: "https://doi.org/10.1002/smr.1785" },
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
    "S10": { nome: "Modelo de technical leverage para avaliar riscos de dependências em ECOS", doi: "https://doi.org/10.1109/ICSE43902.2021.00125" },
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
        descricao: "Este risco ocorre quando vulnerabilidades nas etapas de desenvolvimento, integração ou distribuição são exploradas para alterar componentes ou inserir código malicioso. Como consequência, a integridade, a confiabilidade e a segurança dos artefatos produzidos e distribuídos no ecossistema podem ser comprometidas.",
        cenario: "",
        dimensao: "Técnico",
        classeSEI: "Risco de Engenharia de Produto",
        elementoSEI: "Especialidades em engenharia",
        desafio: "Segurança (arquitetura)",
        justificativaSEI: "O comprometimento da cadeia de suprimentos de software é classificado como <strong>Risco de Engenharia de Produto</strong> porque decorre de falhas introduzidas durante o desenvolvimento, a integração ou a distribuição de componentes de software. O elemento <strong>Especialidades em engenharia</strong> se aplica porque sua prevenção exige conhecimento técnico em desenvolvimento seguro, verificação da integridade de dependências e controle de acesso à cadeia de suprimentos. A área <strong>Segurança (arquitetura)</strong> foi selecionada porque a mitigação depende de controles arquiteturais que assegurem a integridade e a confiabilidade da cadeia de suprimentos ao longo de todo o processo de desenvolvimento.",
        ecos: "Híbrido / Aberto",
        exemplosEcos: {
            aberto: "Os estudos relataram esse risco em <strong>ECOS de Código Aberto</strong> devido ao comprometimento da cadeia de suprimentos por meio da inserção de código malicioso e da exploração de vulnerabilidades em pacotes amplamente utilizados. Os exemplos incluem NPM, PyPI, RubyGems e Rust, conforme reportado por Jiang et al. (2024), Zhou et al. (2024), Schueller e Wachs (2024), Wattanakriengkrai et al. (2023) e Hou et al. (2021).",
            hibrido: "Os estudos relataram esse risco em <strong>ECOS Híbrido</strong> devido à reutilização de componentes provenientes de ecossistemas de código aberto ao longo da cadeia de suprimentos de aplicações proprietárias, sem identificação de sistemas específicos, conforme reportado por Jiang et al. (2022).",
            proprietario: ""
        },
        metrica: "Robustez",
        justificativaMetrica: "O comprometimento da cadeia de suprimentos de software afeta a <strong>robustez</strong> porque falhas introduzidas em componentes centrais podem se propagar de forma sistêmica, comprometendo a continuidade e a capacidade de sobrevivência do ECOS diante de perturbações (Iansiti e Levien, 2004).",
        processoValor: "Criação e entrega de valor",
        justificativaProcesso: " O comprometimento da cadeia de suprimentos de software afeta o processo de <strong>criação e entrega de valor</strong> porque introduz falhas e artefatos maliciosos nos produtos disponibilizados pelo ECOS, comprometendo a integridade das soluções entregues e a confiança dos participantes nesse processo (Burström et al., 2022).",
        solucoes: "S01 (Framework HIN; Metapath2Vec): Reduz a exposição a bibliotecas maliciosas, fortalecendo a cadeia de suprimentos. / S05 (Framework TrustSECO): Registra e calcula evidências de confiança, apoiando a detecção de vulnerabilidades. / S20 (Método de Gerenciamento): Utiliza grafos de conhecimento para identificar vulnerabilidades e calcular escores de confiabilidade na cadeia de suprimentos de software.",
        estudos: ["E02", "E05", "E08", "E10", "E15", "E19"]
    },    
    {
        id: "R02",
        risco: "Exposição contínua a vulnerabilidades em múltiplos componentes do ECOS",
        descricao: "Este risco ocorre quando as correções de segurança não são aplicadas em tempo hábil e o número de dependências transitivas cresce continuamente, ampliando a superfície de ataque. Como consequência, as aplicações permanecem expostas a falhas conhecidas, que podem se propagar entre componentes e ecossistemas interconectados.",
        cenario: "",
        dimensao: "Técnico",
        classeSEI: "Risco de Engenharia de Produto",
        elementoSEI: "Especialidades em engenharia",
        desafio: "Segurança (arquitetura); Garantia de confiabilidade (arquitetura)",
        justificativaSEI: "A exposição contínua a vulnerabilidades em múltiplos componentes do ECOS é classificada como <strong>Risco de Engenharia de Produto</strong> porque decorre de decisões tomadas durante o desenvolvimento, como atrasos na aplicação de correções e falhas na gestão de dependências. O elemento <strong>Especialidades em engenharia</strong> se aplica porque sua redução exige conhecimento técnico sobre superfície de ataque e dependências transitivas. As áreas <strong>Segurança (arquitetura)</strong> e <strong>Garantia de confiabilidade (arquitetura)</strong> foram selecionadas porque a mitigação depende de controles arquiteturais contínuos, e não apenas de correções pontuais.",
        ecos: "Híbrido/ Aberto/ Proprietário",
        exemplosEcos: {
            aberto: "Os estudos relataram esse risco em <strong>ECOS de Código Aberto</strong> devido ao crescimento exponencial de vulnerabilidades transitivas e à persistência de dependências desatualizadas. Os exemplos incluem Maven, NPM, Debian e Fedora, conforme reportado por Keshani et al. (2024), Alfadel et al. (2023) e Lin et al. (2023).",
            hibrido: "Os estudos relataram esse risco em <strong>ECOS Híbrido</strong> devido à reutilização em massa de componentes de código aberto em aplicações comerciais e à diferença na dinâmica de correção entre ferramentas abertas e fechadas, sem identificação de sistemas específicos, conforme reportado por Keshani et al. (2024) e Wright et al. (2013).",
            proprietario: "Os estudos relataram esse risco em <strong>ECOS Proprietário</strong> devido à persistência do risco na fila de correção de ecossistemas comerciais de código fechado. Os exemplos incluem Microsoft Internet Explorer, Microsoft Office e produtos Apple, conforme reportado por Wright et al. (2013)."
        },
        metrica: "Robustez",
        justificativaMetrica: "A exposição contínua a vulnerabilidades em múltiplos componentes do ECOS afeta a <strong>robustez</strong> porque reduz a capacidade do ecossistema de resistir a perturbações e manter seu funcionamento. A permanência de vulnerabilidades conhecidas em componentes interdependentes favorece a propagação de falhas, podendo comprometer diferentes partes do ECOS e reduzir sua resiliência (Iansiti e Levien, 2004).",
        processoValor: "Criação e entrega de valor",
        justificativaProcesso: " A exposição contínua a vulnerabilidades em múltiplos componentes do ECOS afeta o processo de <strong>criação e entrega de valor</strong> porque compromete a qualidade, a segurança e a integridade dos artefatos produzidos e entregues. Como consequência, os participantes passam a confiar menos nas soluções disponibilizadas pelo ecossistema (Burström et al., 2022).",
        solucoes: "S05 (Framework TrustSECO): Apoia a detecção de vulnerabilidades. / S18 (Ferramenta DepReveal): Identifica vulnerabilidades e classifica advisories, reduzindo o tempo de exposição.",
        estudos: ["E09", "E11", "E13", "E35"]
    },
    {
        id: "R03",
        risco: "Vulnerabilidades em dependências transitivas de bibliotecas",
        descricao: "Este risco ocorre quando bibliotecas utilizadas pelo software incorporam outras dependências sobre as quais os desenvolvedores não possuem controle direto. Como consequência, vulnerabilidades presentes nessas dependências transitivas podem permanecer ocultas na estrutura do projeto e se propagar entre diferentes componentes e ecossistemas, especialmente devido à ampla reutilização de software de código aberto.",
        cenario: "",
        dimensao: "Técnico",
        classeSEI: "Risco de Engenharia de Produto",
        elementoSEI: "Especialidades em engenharia",
        desafio: "Segurança (arquitetura)",
        justificativaSEI: "As vulnerabilidades em dependências transitivas de bibliotecas são classificadas como <strong>Risco de Engenharia de Produto</strong> porque estão presentes em componentes que passam a integrar o software, mesmo sem controle direto dos desenvolvedores sobre sua origem. O elemento <strong>Especialidades em engenharia</strong> se aplica porque sua identificação e mitigação exigem conhecimentos técnicos sobre análise de árvores de dependências e rastreamento de vulnerabilidades. A área <strong>Segurança (arquitetura)</strong> foi selecionada porque o risco decorre da própria estrutura de composição do software e da incorporação de código de terceiros, e não de uma falha isolada.",
        ecos: "Híbrido/ Aberto",
        exemplosEcos: {
            aberto: "Os estudos relataram esse risco em <strong>ECOS de Código Aberto</strong> devido à ocorrência e ao impacto de vulnerabilidades transitivas em ferramentas de gerenciamento de dependências e automação de builds. Os exemplos incluem Maven, conforme reportado por Alqahtani et al. (2016).",
            hibrido: "Os estudos relataram esse risco em <strong>ECOS Híbrido</strong> devido à herança oculta de vulnerabilidades transitivas ao reutilizar e integrar componentes de ecossistemas abertos em sistemas e aplicações proprietárias. Os exemplos incluem Maven, conforme reportado por Alqahtani et al. (2016).",
            proprietario: ""
        },
        metrica: "Robustez",
        justificativaMetrica: "As vulnerabilidades em dependências transitivas de bibliotecas afetam a <strong>robustez</strong> porque introduzem pontos de falha ocultos, muitas vezes fora do controle direto dos participantes do ECOS. Essas vulnerabilidades representam ameaças latentes que podem se propagar entre componentes interdependentes, comprometer o funcionamento do ecossistema e reduzir sua capacidade de resistir a perturbações (Iansiti e Levien, 2004).",
        processoValor: "Criação de valor",
        justificativaProcesso: "As vulnerabilidades em dependências transitivas de bibliotecas afetam o processo de <strong>criação de valor</strong> porque passam a integrar os artefatos produzidos pelo ECOS, influenciando diretamente sua qualidade e segurança. Como essas dependências são incorporadas de forma implícita, vulnerabilidades podem comprometer as soluções criadas sem que os desenvolvedores tenham visibilidade ou controle direto sobre sua origem (Burström et al., 2022).",
        solucoes: "S05 (Framework TrustSECO): Ajuda na detecção de vulnerabilidades em geral. / S18 (Ferramenta DepReveal): Apoia a descoberta e análise de vulnerabilidades em projetos NPM.",
        estudos: ["E11", "E31"]
    },
    {
        id: "R04",
        risco: "Incompatibilidade entre versões de bibliotecas interdependentes",
        descricao: "Este risco ocorre quando diferentes versões de bibliotecas interdependentes coexistem em componentes e projetos de um ECOS, especialmente em redes extensas de dependências. Como consequência, incompatibilidades técnicas podem se propagar entre projetos interconectados, dificultando a integração, a manutenção e a evolução do ecossistema.",
        cenario: "",
        dimensao: "Técnico",
        classeSEI: "Risco de Engenharia de Produto",
        elementoSEI: "Integração e teste",
        desafio: "Não identificado",
        justificativaSEI: "A incompatibilidade entre versões de bibliotecas interdependentes é classificada como <strong>Risco de Engenharia de Produto</strong> porque decorre da composição e integração de componentes durante o desenvolvimento do software. O elemento <strong>Integração e teste</strong> se aplica porque as incompatibilidades normalmente são identificadas quando diferentes versões de bibliotecas são integradas e testadas em conjunto. A área de desafio foi classificada como <strong>Não identificada</strong> porque os estudos analisados não permitem associar esse risco a uma subcategoria específica da taxonomia SEI.",
        ecos: "Híbrido/ Aberto",
        exemplosEcos: {
            aberto: "Os estudos relataram esse risco em <strong>ECOS de Código Aberto</strong> devido ao aumento exponencial de projetos potencialmente impactados por vulnerabilidades em dependências transitivas e à alta prevalência de vulnerabilidades divulgadas introduzidas por dependências. Os exemplos incluem Maven, NVD e projetos Java no GitHub, conforme reportado por Alqahtani et al. (2016) e Gkortzis et al. (2021).",
            hibrido: "Os estudos relataram esse risco em <strong>ECOS Híbrido</strong> devido à herança oculta de vulnerabilidades transitivas ao integrar componentes de ecossistemas abertos em aplicações proprietárias, que passam a depender de serviços externos de monitoramento para serem alertadas sobre vulnerabilidades que não controlam diretamente. Os exemplos incluem Maven, cenário hipotético da empresa TaxCoders e serviço Gemnasium, conforme reportado por Alqahtani et al. (2016) e Herbsleb, Kästner e Bogart (2016).",
            proprietario: ""
        },
        metrica: "Produtividade",
        justificativaMetrica: "A incompatibilidade entre versões de bibliotecas interdependentes afeta a <strong>produtividade</strong> porque aumenta o esforço necessário para integrar, manter e evoluir os projetos do ECOS. A resolução de conflitos entre versões consome tempo e recursos, reduzindo a capacidade dos participantes de desenvolver e disponibilizar novas funcionalidades de forma eficiente (Iansiti e Levien, 2004).",
        processoValor: "Entrega de valor",
        justificativaProcesso: "A incompatibilidade entre versões de bibliotecas interdependentes afeta o processo de <strong>entrega de valor</strong> porque dificulta a disponibilização de atualizações e novas funcionalidades aos usuários. A necessidade de resolver conflitos entre versões torna a entrega de software mais lenta, custosa e suscetível a falhas (Burström et al., 2022).",
        solucoes: "S19 (Ferramenta smartPip): Resolve conflitos de dependência por meio de restrições lógicas e otimização, prevenindo falhas de instalação.",
        estudos: ["E12", "E22", "E30", "E31"]
    },
    {
        id: "R05",
        risco: "Ataques direcionados à infraestrutura e aos pacotes do ecossistema",
        descricao: "Este risco ocorre quando agentes mal-intencionados exploram falhas na infraestrutura compartilhada e nos pacotes distribuídos por um ECOS. Como consequência, ataques podem comprometer componentes utilizados por diversos projetos, afetando a segurança dos sistemas e ampliando os impactos por toda a rede do ecossistema.",
        cenario: "",
        dimensao: "Técnico",
        classeSEI: "Risco de Engenharia de Produto",
        elementoSEI: "Especialidades em engenharia",
        desafio: "Segurança (arquitetura)",
        justificativaSEI: "Os ataques direcionados à infraestrutura e aos pacotes do ecossistema são classificados como <strong>Risco de Engenharia de Produto</strong> porque exploram diretamente os artefatos e a infraestrutura técnica do ECOS. O elemento <strong>Especialidades em engenharia</strong> se aplica porque sua prevenção e mitigação exigem conhecimentos técnicos específicos de segurança. A área <strong>Segurança (arquitetura)</strong> foi selecionada porque a redução desse risco depende de controles incorporados à arquitetura da infraestrutura e dos repositórios, e não apenas de respostas após a ocorrência de ataques.",
        ecos: "Híbrido/ Aberto",
        exemplosEcos: {
            aberto: "Os estudos relataram esse risco em <strong>ECOS de Código Aberto</strong> devido a ataques direcionados a pacotes e à infraestrutura, incluindo sabotagem por injeção deliberada de código malicioso e exploração de vulnerabilidades em componentes centrais. Os exemplos incluem NPM (bibliotecas colors e faker) e OpenSSL (caso Heartbleed), conforme reportado por Maeprasart et al. (2023) e Gkortzis et al. (2021).",
            hibrido: "Os estudos relataram esse risco em <strong>ECOS Híbrido</strong> devido à exploração de uma vulnerabilidade em biblioteca de código aberto reutilizada como vetor de ataque contra infraestrutura proprietária, expondo dados de milhões de usuários. Os exemplos incluem caso Equifax, conforme reportado por Gkortzis et al. (2021).",
            proprietario: ""
        },
        metrica: "Robustez",
        justificativaMetrica: "Os ataques direcionados à infraestrutura e aos pacotes do ecossistema afetam a <strong>robustez</strong> porque reduzem a capacidade do ECOS de resistir e se recuperar de perturbações. O comprometimento de pacotes amplamente utilizados pode atingir vários projetos simultaneamente, afetando a integridade e a continuidade do ecossistema (Iansiti e Levien, 2004).",
        processoValor: "Criação de valor",
        justificativaProcesso: "Os ataques direcionados à infraestrutura e aos pacotes do ecossistema afetam o processo de <strong>criação de valor</strong> porque comprometem as ferramentas, bibliotecas e componentes utilizados pelos participantes na construção de soluções. Como consequência, a produção de novos artefatos pode ser interrompida ou ocorrer sobre uma base técnica insegura (Burström et al., 2022).",
        solucoes: "S05 (Framework TrustSECO): Ajuda a reconfigurar sistemas após ataques e apoia a detecção. / S17 (Prática SLA): Auxilia na redução de riscos técnicos e organizacionais, incluindo ataques.",
        estudos: ["E03", "E09", "E12", "E13", "E22"]
    },
    {
        id: "R06",
        risco: "Injeção de código malicioso em pacotes distribuídos pelo ecossistema",
        descricao: "Este risco ocorre quando agentes mal-intencionados inserem código malicioso em pacotes distribuídos por um ECOS, comprometendo bibliotecas legítimas e explorando a confiança depositada pelos desenvolvedores nesses componentes. Como consequência, pacotes comprometidos podem ser propagados para diversos projetos, ampliando o impacto do ataque em todo o ecossistema.",
        cenario: "",
        dimensao: "Técnico",
        classeSEI: "Risco de Engenharia de Produto",
        elementoSEI: "Especialidades em engenharia",
        desafio: "Segurança (arquitetura)",
        justificativaSEI: "A injeção de código malicioso em pacotes distribuídos pelo ecossistema é classificada como <strong>Risco de Engenharia de Produto</strong> porque ocorre durante a produção e a distribuição dos artefatos de software do ECOS. O elemento <strong>Especialidades em engenharia</strong> se aplica porque sua prevenção e mitigação exigem conhecimentos técnicos e controles de segurança ao longo do ciclo de desenvolvimento e distribuição. A área <strong>Segurança (arquitetura)</strong> foi selecionada porque a mitigação depende de mecanismos de verificação incorporados à arquitetura do processo de desenvolvimento e distribuição, e não apenas de revisões pontuais de código.",
        ecos: "Aberto",
        exemplosEcos: {
            aberto: "Os estudos relataram esse risco em <strong>ECOS de Código Aberto</strong> devido à injeção deliberada de código malicioso em pacotes por meio de sequestro de contas de mantenedores, ataques à infraestrutura de registries ou publicação de pacotes com nomes similares a pacotes legítimos. Os exemplos incluem NPM, conforme reportado por Hou et al. (2021).",
            hibrido: "",
            proprietario: ""
        },
        metrica: "Robustez",
        justificativaMetrica: "A injeção de código malicioso em pacotes distribuídos pelo ecossistema afeta a <strong>robustez</strong> porque reduz a capacidade do ECOS de resistir a ameaças que comprometem sua integridade e continuidade. Como pacotes comprometidos podem ser reutilizados por diversos projetos, seus impactos podem se propagar pelo ecossistema, reduzindo sua confiabilidade e capacidade de recuperação diante de perturbações (Iansiti e Levien, 2004).",
        processoValor: "Criação de valor",
        justificativaProcesso: "A injeção de código malicioso em pacotes distribuídos pelo ecossistema afeta o processo de <strong>criação de valor</strong> porque compromete a integridade dos pacotes utilizados pelos participantes na construção de novas soluções. Como consequência, os próprios artefatos produzidos pelo ECOS tornam-se vetores de ataque, prejudicando a criação de software seguro e confiável (Burström et al., 2022).",
        solucoes: "S01 (Framework HIN; Metapath2Vec): Reduz a exposição a bibliotecas maliciosas. / S05 (Framework TrustSECO): Apoia a detecção de vulnerabilidades e reconfiguração de sistemas. / S16 (Prática de Mecanismos de Segurança): Contribui para prevenir uploads maliciosos e aumenta a rastreabilidade.",
        estudos: ["E05", "E19"]
    },
    {
        id: "R07",
        risco: "Atualizações inseguras de dependências em bibliotecas compartilhadas",
        descricao: "Este risco ocorre quando dependências de bibliotecas compartilhadas em um ECOS são atualizadas com código que não passou por revisão e verificação adequadas, como contribuições externas incorporadas sem testes suficientes. Como consequência, falhas podem ser introduzidas nas bibliotecas e propagadas para os diferentes projetos que dependem desses componentes.",
        cenario: "",
        dimensao: "Técnico",
        classeSEI: "Risco de Engenharia de Produto",
        elementoSEI: "Código e teste unitário",
        desafio: "Não identificado",
        justificativaSEI: "As atualizações inseguras de dependências em bibliotecas compartilhadas são classificadas como <strong>Risco de Engenharia de Produto</strong> porque decorrem da incorporação de código não verificado durante o desenvolvimento do software. O elemento <strong>Código e teste unitário</strong> se aplica porque a prevenção desse risco depende da revisão e da realização de testes antes que contribuições externas sejam incorporadas às bibliotecas. A área de desafio foi classificada como <strong>Não identificada</strong> porque os estudos analisados não permitem associar o risco a uma subcategoria mais específica da taxonomia SEI.",
        ecos: "Aberto",
        exemplosEcos: {
            aberto: "Os estudos relataram esse risco em <strong>ECOS de Código Aberto</strong> devido a atualizações inseguras de dependências, incluindo a adição de novos scripts e o acesso a módulos sensíveis do sistema em pull requests de atualização. Os exemplos incluem NPM, conforme reportado por Wattanakriengkrai et al. (2023).",
            hibrido: "",
            proprietario: ""
        },
        metrica: "Produtividade",
        justificativaMetrica: "As atualizações inseguras de dependências em bibliotecas compartilhadas afetam a <strong>produtividade</strong> porque podem introduzir falhas que exigem esforços adicionais de diagnóstico, reversão e correção. O tempo e os recursos empregados na resolução desses problemas reduzem a eficiência dos participantes e comprometem o ritmo de desenvolvimento do ECOS (Iansiti e Levien, 2004).",
        processoValor: "Entrega de valor",
        justificativaProcesso: "As atualizações de dependências integram o ciclo contínuo de entrega de software no ECOS (Burström et al., 2022). Quando esse processo introduz falhas por ausência de verificação, o fluxo de <strong>entrega de valor</strong> é interrompido ou degradado, gerando instabilidade nos projetos dependentes e comprometendo a confiabilidade das entregas realizadas pelo ecossistema.",
        solucoes: "S05 (Framework TrustSECO): Auxilia na detecção de vulnerabilidades introduzidas por meio do registro de fatos de confiança.",
        estudos: ["E05", "E10", "E24"]
    },
    {
        id: "R08",
        risco: "Propagação de bugs não resolvidos entre projetos do ecossistema",
        descricao: "Este risco ocorre quando bugs não corrigidos em pacotes upstream, dos quais outros projetos dependem, não são atualizados ou corrigidos de forma independente pelos projetos dependentes. Como consequência, essas falhas se propagam por toda a rede de dependências do ecossistema, comprometendo bibliotecas e sistemas interligados em larga escala.",
        cenario: "",
        dimensao: "Técnico",
        classeSEI: "Risco de Engenharia de Produto",
        elementoSEI: "Integração e teste",
        desafio: "Não identificado",
        justificativaSEI: "A propagação de bugs não resolvidos entre projetos do ecossistema é classificada como <strong>Risco de Engenharia de Produto</strong> porque bugs não corrigidos em pacotes upstream são herdados diretamente pelos projetos que deles dependem, afetando a integridade do artefato final. O elemento <strong>Integração e teste</strong> se aplica porque o problema se manifesta justamente no momento em que componentes compartilhados são integrados sem verificação e atualização adequadas, tornando o risco sistêmico à medida que se propaga pela rede de dependências. A área de desafio foi classificada como <strong>Não identificada</strong> porque os estudos analisados não apontam uma subcategoria mais específica dentro desse elemento, sendo a classificação em nível de elemento suficiente para descrever a natureza técnica do risco.",
        ecos: "Aberto",
        exemplosEcos: {
            aberto: "Os estudos relataram esse risco em <strong>ECOS de Código Aberto</strong> devido à propagação em cascata de falhas não resolvidas entre bibliotecas, incluindo a saída de mantenedores e a propagação empírica de bugs e vulnerabilidades não corrigidas por dependências a jusante. Os exemplos incluem Rust, NPM, OpenSSL e Apache Struts, conforme reportado por Schueller e Wachs (2024).",
            hibrido: "",
            proprietario: ""
        },
        metrica: "Produtividade",
        justificativaMetrica: "A propagação de bugs não resolvidos entre projetos do ecossistema afeta a <strong>produtividade</strong> porque força múltiplos projetos dependentes a lidar com falhas herdadas que fogem ao seu controle direto. O esforço necessário para contornar, diagnosticar ou aguardar a correção dessas falhas consome recursos dos participantes e reduz a eficiência operacional do ECOS como um todo (Iansiti e Levien, 2004).",
        processoValor: "Entrega de valor",
        justificativaProcesso: "A propagação de bugs não resolvidos entre projetos do ecossistema afeta o processo de <strong>entrega de valor</strong> porque introduz falhas nas entregas realizadas pelo ecossistema, comprometendo a premissa de que os artefatos disponibilizados funcionem de forma confiável. Como consequência, os participantes precisam gerenciar instabilidades que deveriam ter sido resolvidas na origem, nos pacotes upstream (Burström et al., 2022).",
        solucoes: "S14 (Prática de Robustez da Plataforma): Mitiga vulnerabilidades estruturais e planeja a evolução do sistema, contendo a propagação de bugs.",
        estudos: ["E03", "E08"]
    },
    {
        id: "R09",
        risco: "Abandono de bibliotecas essenciais do ecossistema",
        descricao: "Este risco ocorre quando bibliotecas essenciais, frequentemente mantidas por voluntários sem vínculo formal com o ecossistema, são descontinuadas. Como consequência, os sistemas que delas dependem podem ser gravemente comprometidos e, devido à natureza transitiva de muitas dependências, o abandono de uma única biblioteca amplamente utilizada tende a afetar um número significativo de projetos ao longo da rede.",
        cenario: "",
        dimensao: "Técnico",
        classeSEI: "Risco da Engenharia de Produto",
        elementoSEI: "Requisitos",
        desafio: "Engenharia de Requisitos (processo)",
        justificativaSEI: "O abandono de bibliotecas essenciais do ecossistema é classificado como <strong>Risco da Engenharia de Produto</strong> porque compromete diretamente a capacidade do ecossistema de atender aos requisitos técnicos dos projetos que delas dependem. O elemento <strong>Requisitos</strong> se aplica porque, quando uma biblioteca essencial é abandonada, os requisitos de manutenção, segurança e evolução que ela sustentava deixam de ser atendidos, gerando lacunas na engenharia do produto. A área <strong>Engenharia de Requisitos (processo)</strong> foi selecionada porque a identificação e o tratamento de dependências críticas precisam ser considerados já na etapa de levantamento de requisitos, e não apenas quando o abandono já ocorreu.",
        ecos: "Aberto",
        exemplosEcos: {
            aberto: "Os estudos relataram esse risco em <strong>ECOS de Código Aberto</strong> devido ao abandono de bibliotecas, cerca de uma em cada quatro não sobrevive além do ano de criação — e à saída de mantenedores-chave sem substituição. Os exemplos incluem Maven e Rust, conforme reportado por Hasan et al. (2025) e Schueller e Wachs (2024).",
            hibrido: "",
            proprietario: ""
        },
        metrica: "Robustez",
        justificativaMetrica: "O abandono de bibliotecas essenciais do ecossistema afeta a <strong>robustez</strong> porque retira da rede componentes críticos dos quais outros projetos dependem transitivamente. A descontinuidade de bibliotecas amplamente utilizadas pode comprometer a sobrevivência de múltiplos projetos dependentes, fragilizando a resiliência estrutural do ECOS como um todo (Iansiti e Levien, 2004).",
        processoValor: "Criação de valor",
        justificativaProcesso: "O abandono de bibliotecas essenciais do ecossistema afeta o processo de <strong>criação de valor</strong> porque essas bibliotecas constituem a base técnica sobre a qual os participantes do ECOS criam valor. Como consequência, os projetos dependentes perdem acesso a componentes fundamentais sem os quais não conseguem manter, evoluir ou garantir a segurança dos seus produtos (Burström et al., 2022).",
        solucoes: "S12 (Modelo de Envelhecimento): Permite prever a obsolescência a partir do uso, apoiando o planejamento de atualizações e a mitigação do risco de abandono e manutenção. / S15 (Prática de Atrair e Reter Atores): Garante a continuidade do projeto em caso de abandono.",
        estudos: ["E03", "E08"]
    },
    {
        id: "R10",
        risco: "Envelhecimento de bibliotecas abertas amplamente utilizadas",
        descricao: "Este risco ocorre quando bibliotecas amplamente utilizadas deixam de receber manutenção adequada e acumulam incompatibilidades e vulnerabilidades ao longo do tempo. Como consequência, essa ausência de atualização contínua amplia os riscos de manutenção e segurança para todos os sistemas que dependem desses componentes.",
        cenario: "",
        dimensao: "Técnico",
        classeSEI: "Risco da Engenharia de Produto",
        elementoSEI: "Integração e teste",
        desafio: "Não identificado",
        justificativaSEI: "O envelhecimento de bibliotecas abertas amplamente utilizadas é classificado como <strong>Risco da Engenharia de Produto</strong> porque se manifesta progressivamente na composição técnica dos componentes integrados ao ECOS. O elemento <strong>Integração e teste</strong> se aplica porque o risco se torna evidente justamente no momento em que versões desatualizadas são integradas a novos projetos ou quando falhas acumuladas comprometem a cobertura de testes existentes, exigindo verificação contínua da compatibilidade entre versões. A área de desafio foi classificada como <strong>Não identificada</strong> porque os estudos analisados não apontam uma subcategoria mais específica dentro desse elemento, sendo a classificação em nível de elemento suficiente para descrever a natureza técnica do risco.",
        ecos: "Aberto",
        exemplosEcos: {
            aberto: "Os estudos relataram esse risco em <strong>ECOS de Código Aberto</strong> devido ao envelhecimento de bibliotecas ao longo do tempo, influenciado pela presença ou ausência de bibliotecas rivais. Os exemplos incluem Maven, conforme reportado por Kula et al. (2017).",
            hibrido: "",
            proprietario: ""
        },
        metrica: "Produtividade",
        justificativaMetrica: "O envelhecimento de bibliotecas abertas amplamente utilizadas afeta a <strong>produtividade</strong> porque aumenta o custo de manutenção dos projetos dependentes. Desenvolvedores precisam despender esforços crescentes para contornar incompatibilidades, corrigir falhas herdadas e eventualmente migrar para alternativas mais atualizadas, comprometendo a eficiência do desenvolvimento no ECOS (Iansiti e Levien, 2004).",
        processoValor: "Criação e entrega de valor",
        justificativaProcesso: "O envelhecimento de bibliotecas abertas amplamente utilizadas afeta o processo de <strong>criação e entrega de valor</strong> porque essas bibliotecas são insumos essenciais para ambos os processos no ECOS. A criação de valor é prejudicada pela dificuldade de construir sobre componentes obsoletos, enquanto a entrega de valor é afetada pela instabilidade e pelas vulnerabilidades que acompanham bibliotecas sem manutenção adequada (Burström et al., 2022).",
        solucoes: "S12 (Modelo de Envelhecimento): Permite prever a obsolescência, apoiando o planejamento de atualizações e a redução de riscos de manutenção e segurança.",
        estudos: ["E01", "E27"]
    },
    {
        id: "R11",
        risco: "Fragilidades na infraestrutura compartilhada de desenvolvimento",
        descricao: "Este risco ocorre quando há ausência de modelos de processo padronizados, somada a dificuldades na definição de requisitos e à incerteza em manter padrões de qualidade na infraestrutura compartilhada de desenvolvimento. Como consequência, a confiabilidade do ambiente é comprometida e a probabilidade de falhas aumenta.",
        cenario: "",
        dimensao: "Técnico",
        classeSEI: "Risco de Ambiente de Desenvolvimento",
        elementoSEI: "Sistema de Desenvolvimento",
        desafio: "Sem modelo de processo padronizado (processo)",
        justificativaSEI: "As fragilidades na infraestrutura compartilhada de desenvolvimento são classificadas como <strong>Risco de Ambiente de Desenvolvimento</strong> porque decorrem de deficiências no ambiente em que o software é produzido, e não de características intrínsecas do produto em si. O elemento <strong>Sistema de Desenvolvimento</strong> se aplica porque o problema reside na ausência de padrões de processo, ferramentas e práticas de qualidade que deveriam estruturar o ambiente compartilhado do ECOS. A área <strong>Sem modelo de processo padronizado (processo)</strong> foi selecionada porque a falta de padronização impede que boas práticas sejam adotadas de forma consistente por todos os participantes.",
        ecos: "Aberto",
        exemplosEcos: {
            aberto: "Os estudos relataram esse risco em <strong>ECOS de Código Aberto</strong> devido à sua utilização como ambiente técnico de desenvolvimento de software em que o risco foi discutido. Os exemplos incluem Ruby, conforme reportado por Manalif, Capretz e Ho (2013).",
            hibrido: "",
            proprietario: ""
        },
        metrica: "Produtividade; Robustez",
        justificativaMetrica: "As fragilidades na infraestrutura compartilhada de desenvolvimento afetam a <strong>produtividade</strong> e a <strong>robustez</strong> do ecossistema porque comprometem simultaneamente essas duas dimensões. A produtividade é afetada pela ineficiência gerada pela ausência de padrões, enquanto a robustez é reduzida porque uma infraestrutura frágil aumenta a probabilidade de falhas sistêmicas que podem comprometer a continuidade e a confiabilidade do ECOS (Iansiti e Levien, 2004).",
        processoValor: "Captura de valor",
        justificativaProcesso: "As fragilidades na infraestrutura compartilhada de desenvolvimento afetam o processo de <strong>captura de valor</strong> porque essa infraestrutura constitui o substrato técnico que viabiliza a apropriação de benefícios no ECOS. Como consequência, a capacidade dos participantes de monetizar e apropriar os resultados gerados pelo ecossistema fica comprometida, pois a incerteza na qualidade e na confiabilidade dos processos dificulta a consolidação de resultados sustentáveis (Burström et al., 2022).",
        solucoes: "S14 (Prática de Robustez da Plataforma): Mitiga vulnerabilidades estruturais e fortalece a arquitetura, incluindo a infraestrutura.",
        estudos: ["E34"]
    },
    {
        id: "R12",
        risco: "Perda de confiança devido a pacotes maliciosos ou enganosos no ecossistema",
        descricao: "Este risco ocorre quando pacotes são rotulados de forma enganosa para ocultar funcionalidades prejudiciais ou quando vulnerabilidades não identificadas permanecem nos componentes distribuídos. Como consequência, a reputação e a relação de confiança entre usuários e provedores podem ser comprometidas, efeito que se intensifica à medida que o ecossistema cresce e a confiança passa a ser distribuída entre um número maior de atores.",
        cenario: "",
        dimensao: "Social",
        classeSEI: "Risco de Ambiente de Desenvolvimento",
        elementoSEI: "Métodos de Gestão",
        desafio: "Garantia de Qualidade (processo); Gestão de Evolução (arquitetura)",
        justificativaSEI: "A perda de confiança devido a pacotes maliciosos ou enganosos no ecossistema é classificada como <strong>Risco de Ambiente de Desenvolvimento</strong> porque tem natureza sociotécnica, emergindo de falhas nos métodos de gestão do ecossistema, e não de uma falha pontual em um artefato específico. O elemento <strong>Métodos de Gestão</strong> se aplica porque o problema está na falta de práticas institucionalizadas para identificar, auditar e sinalizar pacotes maliciosos ou enganosos. As áreas <strong>Garantia de Qualidade (processo)</strong> e <strong>Gestão de Evolução (arquitetura)</strong> foram selecionadas porque tanto os processos de verificação quanto a governança da evolução dos pacotes precisam ser fortalecidos para impedir que atores mal-intencionados comprometam a reputação do ECOS sem que os participantes sejam alertados.",
        ecos: "Aberto",
        exemplosEcos: {
            aberto: "Os estudos relataram esse risco em <strong>ECOS de Código Aberto</strong> devido ao comprometimento de pacotes por meio de sequestro de contas de mantenedores, typosquatting ou inserção de código malicioso por contribuidores. Os exemplos incluem NPM, conforme reportado por Hou, Farshidi e Jansen (2021).",
            hibrido: "",
            proprietario: ""
        },
        metrica: "Criação de Nichos; Robustez",
        justificativaMetrica: "A perda de confiança devido a pacotes maliciosos ou enganosos no ecossistema afeta a <strong>criação de nichos</strong> e a <strong>robustez</strong> do ECOS porque compromete duas dimensões centrais de sua saúde. A criação de nichos é afetada porque a desconfiança desincentiva novos participantes a adotar e contribuir com o ecossistema, enquanto a robustez é reduzida porque um ECOS cujos participantes não confiam nos pacotes disponíveis torna-se frágil e propenso ao abandono, comprometendo sua capacidade de sobreviver a perturbações (Iansiti e Levien, 2004).",
        processoValor: "Captura de valor",
        justificativaProcesso: "A perda de confiança devido a pacotes maliciosos ou enganosos no ecossistema afeta o processo de <strong>captura de valor</strong> porque a confiança entre os atores é um pré-requisito para que o valor gerado no ECOS seja efetivamente apropriado. Como consequência, os participantes passam a questionar a legitimidade das soluções disponíveis, dificultando a adoção, a monetização e a apropriação sustentável dos benefícios do ecossistema (Burström et al., 2022).",
        solucoes: "S05 (Framework TrustSECO): Registra fatos de confiança. / S08 (Modelo de Metas e Anti-Metas): Favorece a análise de riscos ligados a motivações maliciosas ou falhas intencionais, prevenindo a perda de confiança.",
        estudos: ["E02", "E13", "E19"]
    },
    {
        id: "R13",
        risco: "Conflitos de interesse na governança do ecossistema (moral hazard)",
        descricao: "Este risco ocorre quando desenvolvedores se beneficiam da reutilização de bibliotecas sem arcar com os riscos associados ao seu uso, transferindo essa responsabilidade para os usuários finais, em um fenômeno caracterizado como moral hazard. Como consequência, essa assimetria de incentivos compromete a sustentabilidade do ecossistema no longo prazo.",
        cenario: "",
        dimensao: "Social",
        classeSEI: "Risco de Ambiente de Desenvolvimento",
        elementoSEI: "Processo de Gestão",
        desafio: "Coordenação e Gestão de Desenvolvimento (processo)",
        justificativaSEI: "Os conflitos de interesse na governança do ecossistema (moral hazard) são classificados como <strong>Risco de Ambiente de Desenvolvimento</strong> porque emergem dos incentivos e das regras que estruturam o comportamento dos participantes, e não de uma falha técnica no produto. O elemento <strong>Processo de Gestão</strong> se aplica porque a assimetria de incentivos, em que desenvolvedores capturam benefícios da reutilização sem arcar com os riscos correspondentes, decorre de falhas no design dos processos de governança do ecossistema. A área <strong>Coordenação e Gestão de Desenvolvimento (processo)</strong> foi selecionada porque, sem mecanismos que alinhem responsabilidades e incentivos, o risco moral compromete a sustentabilidade coletiva do ECOS.",
        ecos: "Aberto",
        exemplosEcos: {
            aberto: "Os estudos relataram esse risco em <strong>ECOS de Código Aberto</strong> devido à ocorrência de moral hazard, em que os benefícios da alavancagem técnica são colhidos pelos desenvolvedores das bibliotecas, enquanto o risco de vulnerabilidades é suportado pelos usuários. Os exemplos incluem Apache Maven (ecossistema FOSS Java), conforme reportado por Massacci e Pashchenko (2021).",
            hibrido: "",
            proprietario: ""
        },
        metrica: "Produtividade; Criação de Nichos",
        justificativaMetrica: "Os conflitos de interesse na governança do ecossistema (moral hazard) afetam a <strong>produtividade</strong> e a <strong>criação de nichos</strong> porque criam desincentivos para que desenvolvedores invistam na qualidade e na segurança das bibliotecas que reutilizam. A criação de nichos também é comprometida, pois a assimetria de incentivos desestimula o surgimento de novos mantenedores dispostos a sustentar componentes críticos sem a devida compensação ou reconhecimento (Iansiti e Levien, 2004).",
        processoValor: "Captura de valor",
        justificativaProcesso: "Os conflitos de interesse na governança do ecossistema (moral hazard) afetam o processo de <strong>captura de valor</strong> porque os benefícios da reutilização são capturados de forma assimétrica: desenvolvedores se apropriam do valor sem contribuir proporcionalmente para a sua manutenção. Esse desequilíbrio compromete a sustentabilidade do processo de captura de valor ao longo do tempo, podendo levar ao colapso dos componentes mais reutilizados (Burström et al., 2022).",
        solucoes: "S10 (Modelo de Technical Leverage): Indica projetos mais expostos a falhas, expondo o risco do moral hazard. / S15 (Prática de Atrair e Reter Atores): Ajuda a mitigar conflitos e alinhar incentivos entre os atores por meio de práticas de governança.",
        estudos: ["E20"]
    },
    {
        id: "R14",
        risco: "Falhas de comunicação entre os múltiplos atores do ecossistema",
        descricao: "Este risco ocorre quando equipes distribuídas, com opiniões divergentes e sem coordenação clara, enfrentam dificuldades para atingir objetivos comuns devido à ausência de canais de diálogo eficazes. Como consequência, problemas de má gestão, inexperiência e planejamento deficiente entre os múltiplos atores do ecossistema são agravados.",
        cenario: "",
        dimensao: "Social",
        classeSEI: "Riscos de Ambiente de Desenvolvimento",
        elementoSEI: "Ambiente de Trabalho",
        desafio: "Não identificado",
        justificativaSEI: "As falhas de comunicação entre os múltiplos atores do ecossistema são classificadas como <strong>Riscos de Ambiente de Desenvolvimento</strong> porque residem no contexto colaborativo em que equipes distribuídas precisam coordenar esforços, e não em uma característica técnica do produto. O elemento <strong>Ambiente de Trabalho</strong> se aplica porque a ausência de canais e práticas de comunicação eficazes compromete o ambiente social e organizacional do desenvolvimento, gerando desalinhamento, má gestão e planejamento deficiente que afetam a qualidade e a continuidade dos projetos. A área de desafio foi classificada como <strong>Não identificada</strong> porque os estudos analisados não apontam uma subcategoria mais específica dentro desse elemento, sendo a classificação em nível de elemento suficiente para descrever a natureza sociotécnica do risco.",
        ecos: "Aberto/ Proprietário",
        exemplosEcos: {
            aberto: "Os estudos relataram esse risco em <strong>ECOS de Código Aberto</strong> devido às dificuldades de comunicação eficaz entre equipes multi-institucionais dispersas, decorrentes da divergência sobre a melhor forma de atingir objetivos compartilhados. Os exemplos incluem Exascale Computing Project (ECP), xSDK e E4S, conforme reportado por McInnes et al. (2024).",
            hibrido: "",
            proprietario: "Os estudos relataram esse risco em <strong>ECOS Proprietário</strong> devido a falhas de comunicação entre atores de desenvolvimento distribuído geograficamente em diferentes países. Os exemplos incluem Company A (gestão de ativos) e Company B / Ocuco Ltd. (setor óptico), conforme reportado por Beecham et al. (2021)."
        },
        metrica: "Produtividade",
        justificativaMetrica: "As falhas de comunicação entre os múltiplos atores do ecossistema afetam a <strong>produtividade</strong> porque geram retrabalho, desalinhamento de esforços e planejamento ineficiente. A coordenação entre múltiplos atores é essencial para que o ECOS funcione de forma eficiente; sem ela, os recursos dos participantes são desperdiçados em conflitos e inconsistências que poderiam ser evitados com canais de comunicação adequados (Iansiti e Levien, 2004).",
        processoValor: "Entrega de valor",
        justificativaProcesso: "As falhas de comunicação entre os múltiplos atores do ecossistema afetam o processo de <strong>entrega de valor</strong> porque comprometem a coordenação eficaz entre os atores que contribuem para os projetos, da qual essa entrega depende. Como consequência, surgem atrasos, inconsistências e entregas de qualidade inferior, tornando o processo fragmentado e propenso a falhas na ausência de diálogo claro e canais formais de comunicação (Burström et al., 2022).",
        solucoes: "S15 (Prática de Atrair e Reter Atores): Contribui para mitigar conflitos e promover a coordenação entre os atores. / S17 (Prática SLA): Formaliza expectativas e comunicação em contextos de prestação de serviços.",
        estudos: ["E07", "E21"]
    },
    {
        id: "R15",
        risco: "Ausência de mecanismos formais de governança no ecossistema",
        descricao: "Este risco ocorre quando não existem regras ou estruturas de governança formais, situação especialmente comum em ecossistemas de código aberto. Como consequência, surgem riscos difíceis de controlar, que impactam diretamente a sustentabilidade e a segurança do ecossistema.",
        cenario: "",
        dimensao: "Social",
        classeSEI: "Risco de Ambiente de Desenvolvimento",
        elementoSEI: "Processo de Desenvolvimento",
        desafio: "Sem modelos de processo padronizado (processo)",
        justificativaSEI: "A ausência de mecanismos formais de governança no ecossistema é classificada como <strong>Risco de Ambiente de Desenvolvimento</strong> porque afeta diretamente as regras, os papéis e os fluxos pelos quais as decisões de desenvolvimento são tomadas e executadas no ECOS. O elemento <strong>Processo de Desenvolvimento</strong> se aplica porque, sem processos padronizados de governança, o desenvolvimento torna-se desordenado e imprevisível, dificultando a identificação e o controle de riscos. A área <strong>Sem modelos de processo padronizado (processo)</strong> foi selecionada porque a lacuna é de natureza processual e organizacional, não técnica.",
        ecos: "Aberto",
        exemplosEcos: {
            aberto: "Os estudos relataram esse risco em <strong>ECOS de Código Aberto</strong> devido à ausência de verificações automatizadas mais rígidas no processo de publicação, favorecendo dados inconsistentes. Os exemplos incluem GNOME e Maven Central, conforme reportado por Oliveira e Alves (2021) e Keshani et al. (2024).",
            hibrido: "",
            proprietario: ""
        },
        metrica: "Robustez",
        justificativaMetrica: "A ausência de mecanismos formais de governança no ecossistema afeta a <strong>robustez</strong> porque a governança formal é um dos pilares que fornece os mecanismos pelos quais o ECOS detecta e responde a ameaças à sua sustentabilidade. Na ausência dessas estruturas, o ecossistema perde capacidade de coordenar respostas a riscos, tornando-se vulnerável a perturbações que poderiam ser mitigadas com regras e processos formalmente estabelecidos (Iansiti e Levien, 2004).",
        processoValor: "Captura de valor",
        justificativaProcesso: "A ausência de mecanismos formais de governança no ecossistema afeta o processo de <strong>captura de valor</strong> porque a governança formal é o mecanismo que regula como os participantes do ECOS se apropriam do valor gerado. Sem regras e estruturas formais, esse processo torna-se incerto e desequilibrado, favorecendo atores que agem oportunisticamente em detrimento da sustentabilidade coletiva do ecossistema (Burström et al., 2022).",
        solucoes: "S02 (Framework de Seleção de Fornecedores): Permite estruturar critérios de decisão, reduzindo riscos organizacionais. / S10 (Modelo de Technical Leverage): Fornece métricas para a governança. / S15 (Prática de Atrair e Reter Atores): Aborda práticas de governança. / S17 (Prática SLA): Formaliza regras e expectativas.",
        estudos: ["E09", "E18"]
    },
    {
        id: "R16",
        risco: "Sobrecarga de mantenedores de múltiplos pacotes críticos",
        descricao: "Este risco ocorre quando há ausência de remuneração e de processos formais para gerenciar contribuições externas, o que aumenta progressivamente a carga de trabalho dos mantenedores. Como consequência, a continuidade dos projetos é colocada em risco e a possibilidade de falhas causadas pela sobrecarga é ampliada.",
        cenario: "",
        dimensao: "Social",
        classeSEI: "Risco de Ambiente de Desenvolvimento",
        elementoSEI: "Processo de Gestão",
        desafio: "Coordenação e Gestão de Desenvolvimento (processo)",
        justificativaSEI: "A sobrecarga de mantenedores de múltiplos pacotes críticos é classificada como <strong>Risco de Ambiente de Desenvolvimento</strong> porque emerge de deficiências no processo de gestão das contribuições e do trabalho voluntário, e não de uma falha no produto em si. O elemento <strong>Processo de Gestão</strong> se aplica porque a ausência de remuneração, de processos formais para triagem de contribuições externas e de mecanismos de reconhecimento sobrecarrega os mantenedores, comprometendo a continuidade dos projetos. A área <strong>Coordenação e Gestão de Desenvolvimento (processo)</strong> foi selecionada porque o risco decorre fundamentalmente de lacunas na organização do trabalho colaborativo.",
        ecos: "Aberto",
        exemplosEcos: {
            aberto: "Os estudos relataram esse risco em <strong>ECOS de Código Aberto</strong> devido à dependência de uma pequena equipe central de mantenedores — por vezes um único mantenedor não remunerado e sobrecarregado — para atender uma base massiva de usuários. Os exemplos incluem caso Log4Shell, conforme reportado por Maeprasart et al. (2023).",
            hibrido: "",
            proprietario: ""
        },
        metrica: "Produtividade; Criação de Nichos",
        justificativaMetrica: "A sobrecarga de mantenedores de múltiplos pacotes críticos afeta a <strong>produtividade</strong> e a <strong>criação de nichos</strong> do ecossistema porque compromete a capacidade de manutenção e evolução dos pacotes críticos. A criação de nichos também é prejudicada, pois a sobrecarga desincentiva novos participantes a assumir responsabilidades de manutenção, estreitando a base de contribuidores e dificultando a diversificação e o crescimento do ecossistema (Iansiti e Levien, 2004).",
        processoValor: "Captura de valor",
        justificativaProcesso: "A sobrecarga de mantenedores de múltiplos pacotes críticos afeta o processo de <strong>captura de valor</strong> porque os mantenedores são os atores que garantem a qualidade e a continuidade dos componentes pelos quais o valor é apropriado no ECOS. Como consequência, esse processo é comprometido ao tornar insustentável o trabalho de manutenção, sem o qual os participantes não conseguem se apropriar de forma confiável dos benefícios oferecidos pelo ecossistema (Burström et al., 2022).",
        solucoes: "S15 (Prática de Atrair e Reter Atores): Alivia a carga de trabalho dos mantenedores por meio de práticas de governança voltadas a atrair e reter participantes.",
        estudos: ["E12"]
    },
    {
        id: "R17",
        risco: "Dependência crítica de poucos mantenedores (Truck Factor)",
        descricao: "Este risco ocorre quando o conhecimento essencial sobre um projeto fica concentrado em um número reduzido de indivíduos. Como consequência, o abandono ou a indisponibilidade desses colaboradores pode gerar falhas em cascata nas bibliotecas dependentes, ameaçando a estabilidade de todo o ecossistema.",
        cenario: "",
        dimensao: "Social",
        classeSEI: "Risco de Restrições do Programa",
        elementoSEI: "Contrato",
        desafio: "Atividades de desenvolvimento são altamente dependentes de desenvolvedores terceiros",
        justificativaSEI: "A dependência crítica de poucos mantenedores (Truck Factor) é classificada como <strong>Risco de Restrições do Programa</strong> porque impõe uma restrição estrutural ao programa de desenvolvimento do ECOS: a continuidade dos projetos fica condicionada à disponibilidade de indivíduos específicos, e não a uma característica técnica do produto. O elemento <strong>Contrato</strong> se aplica porque essa dependência decorre da ausência de acordos formais que garantam a continuidade do trabalho de manutenção por parte de colaboradores externos. A área <strong>Atividades de desenvolvimento são altamente dependentes de desenvolvedores terceiros</strong> foi selecionada porque a concentração de conhecimento crítico em poucos mantenedores é uma restrição externa à engenharia, e não um problema resolvível apenas com ajustes técnicos.",
        ecos: "Aberto",
        exemplosEcos: {
            aberto: "Os estudos relataram esse risco em <strong>ECOS de Código Aberto</strong> devido ao baixo truck factor das bibliotecas utilizadas, que concentra conhecimento essencial em poucos indivíduos, a ponto de a remoção de uma biblioteca por um único desenvolvedor causar falhas em cascata em larga escala. Os exemplos incluem Rust e NPM (caso left-pad), conforme reportado por Schueller e Wachs (2024).",
            hibrido: "",
            proprietario: ""
        },
        metrica: "Robustez",
        justificativaMetrica: "A dependência crítica de poucos mantenedores (Truck Factor) afeta a <strong>robustez</strong> porque a concentração de conhecimento essencial em poucos indivíduos cria pontos únicos de falha. Quando esses mantenedores se tornam indisponíveis, o ecossistema perde capacidade de manter e evoluir seus componentes críticos, reduzindo sua resiliência a perturbações e comprometendo sua sobrevivência no longo prazo (Iansiti e Levien, 2004).",
        processoValor: "Criação de valor",
        justificativaProcesso: "A dependência crítica de poucos mantenedores (Truck Factor) afeta o processo de <strong>criação de valor</strong> porque os mantenedores centrais são os responsáveis pela criação e pela evolução dos artefatos que sustentam o valor do ECOS. Como consequência, a capacidade de inovar, corrigir e evoluir os componentes do ecossistema fica concentrada em pontos vulneráveis que, se removidos, podem paralisar esse processo de forma abrupta (Burström et al., 2022).",
        solucoes: "S15 (Prática de Atrair e Reter Atores): Mitiga o risco de abandono ou indisponibilidade de mantenedores-chave por meio da retenção e do apoio a colaboradores.",
        estudos: ["E08"]
    },
    {
        id: "R18",
        risco: "Ameaças de insiders maliciosos no ecossistema",
        descricao: "Este risco ocorre quando desenvolvedores insatisfeitos ou mal-intencionados comprometem deliberadamente pacotes, introduzindo vulnerabilidades intencionais. Como consequência, e por envolver atores internos com acesso privilegiado, esse risco torna-se particularmente difícil de detectar e mitigar.",
        cenario: "",
        dimensao: "Social",
        classeSEI: "Risco de Ambiente de Desenvolvimento",
        elementoSEI: "Processo de Gestão",
        desafio: "Coordenação e Gestão de Desenvolvimento (processo)",
        justificativaSEI: "As ameaças de insiders maliciosos no ecossistema são classificadas como <strong>Risco de Ambiente de Desenvolvimento</strong> porque emergem de falhas no processo de gestão de acesso e de contribuições, e não de uma vulnerabilidade técnica isolada. O elemento <strong>Processo de Gestão</strong> se aplica porque o risco decorre da ausência de mecanismos formais de controle, auditoria e verificação das ações de atores internos com acesso privilegiado. A área <strong>Coordenação e Gestão de Desenvolvimento (processo)</strong> foi selecionada porque, sem processos que monitorem e restrinjam o comportamento de contribuidores, o ECOS permanece vulnerável a ações deliberadamente maliciosas difíceis de detectar e mitigar.",
        ecos: "Aberto",
        exemplosEcos: {
            aberto: "Os estudos relataram esse risco em <strong>ECOS de Código Aberto</strong> devido ao comprometimento de pacotes por desenvolvedores insiders, incluindo contribuidores descontentes ou maliciosos. Os exemplos incluem NPM, conforme reportado por Hou, Farshidi e Jansen (2021).",
            hibrido: "",
            proprietario: ""
        },
        metrica: "Robustez",
        justificativaMetrica: "As ameaças de insiders maliciosos no ecossistema afetam a <strong>robustez</strong> porque introduzem vulnerabilidades intencionais que são particularmente difíceis de detectar e mitigar. Por envolver atores com acesso privilegiado e conhecimento específico do projeto, esse tipo de ataque pode comprometer componentes centrais do ECOS de forma silenciosa, reduzindo significativamente a resiliência do ecossistema a ameaças internas (Iansiti e Levien, 2004).",
        processoValor: "Criação de valor",
        justificativaProcesso: "As ameaças de insiders maliciosos no ecossistema afetam o processo de <strong>criação de valor</strong> porque os próprios atores que deveriam contribuir para a construção e evolução dos artefatos do ECOS passam a ser vetores de dano. Vulnerabilidades intencionais introduzidas por insiders comprometem a integridade dos componentes criados, inviabilizando sua utilização segura e minando a confiança no processo de criação coletiva de valor (Burström et al., 2022).",
        solucoes: "S05 (Framework TrustSECO): Registra fatos de confiança. / S08 (Modelo de Metas e Anti-Metas): Ajuda a analisar riscos ligados a motivações maliciosas. / S16 (Prática de Mecanismos de Segurança): Previne uploads maliciosos por meio da adoção de mecanismos como controle de permissões e auditoria.",
        estudos: ["E19"]
    },
    {
        id: "R19",
        risco: "Ausência ou deficiência de documentação das plataformas",
        descricao: "Este risco ocorre quando há falta de documentação adequada, ou quando as documentações existentes são incompletas e pouco claras. Como consequência, o trabalho dos desenvolvedores é dificultado e sua capacidade de identificar riscos é reduzida, comprometendo tanto a validação de contribuições quanto a segurança geral das plataformas.",
        cenario: "",
        dimensao: "Negócio",
        classeSEI: "Risco de Ambiente de Desenvolvimento",
        elementoSEI: "Processo de Desenvolvimento",
        desafio: "Sem modelo de processo padronizado (processo)",
        justificativaSEI: "A ausência ou deficiência de documentação das plataformas é classificada como <strong>Risco de Ambiente de Desenvolvimento</strong> porque emerge do próprio processo de desenvolvimento do ECOS, sendo um produto direto e um requisito implícito desse processo. O elemento <strong>Processo de Desenvolvimento</strong> se aplica porque a padronização documental deve ser incorporada ao fluxo de trabalho, e não tratada como uma etapa acessória. A área <strong>Sem modelo de processo padronizado (processo)</strong> foi selecionada porque, sem padrões que orientem a produção de documentação completa e adequada, os desenvolvedores enfrentam barreiras de uso e ficam expostos a riscos de segurança evitáveis.",
        ecos: "Aberto",
        exemplosEcos: {
            aberto: "Os estudos relataram esse risco em <strong>ECOS de Código Aberto</strong> devido à documentação imprecisa e incompleta, que reduz a capacidade dos usuários de identificar discrepâncias entre o desempenho documentado e o real dos artefatos, e à documentação de governança mal estruturada. Os exemplos incluem Hugging Face e GNOME, conforme reportado por Jiang et al. (2022) e Oliveira e Alves (2021).",
            hibrido: "",
            proprietario: ""
        },
        metrica: "Produtividade; Criação de Nichos",
        justificativaMetrica: "A ausência ou deficiência de documentação das plataformas afeta a <strong>produtividade</strong> e a <strong>criação de nichos</strong> do ecossistema porque aumenta o custo de entrada e de uso das plataformas para novos desenvolvedores. A criação de nichos também é comprometida, pois desenvolvedores que encontram documentação insuficiente têm menos incentivos para adotar e contribuir com o ECOS, reduzindo a diversidade e o crescimento do ecossistema (Iansiti e Levien, 2004).",
        processoValor: "Criação e entrega de valor",
        justificativaProcesso: "A ausência ou deficiência de documentação das plataformas afeta o processo de <strong>criação e entrega de valor</strong> porque a documentação é um insumo essencial para ambos os processos no ECOS. Sem ela, os desenvolvedores não conseguem utilizar adequadamente as plataformas para criar novos artefatos, nem os usuários finais conseguem compreender e apropriar corretamente as soluções entregues, comprometendo ambos os processos de forma simultânea (Burström et al., 2022).",
        solucoes: "S21 (Método de Apoio à Decisão Multicritério): Mitiga riscos de integração causados pela falta de clareza por meio da análise conjunta de requisitos de mercado e de engenharia.",
        estudos: ["E09", "E15", "E18", "E28"]
    },
    {
        id: "R20",
        risco: "Altos custos de manutenção e risco de migração para plataformas concorrentes",
        descricao: "Este risco ocorre quando a ausência de suporte ou manutenção adequados leva à perda de participantes para soluções alternativas. Como consequência, cabe ao provedor central da plataforma gerenciar a fidelidade dos participantes e reduzir os custos percebidos de migração.",
        cenario: "",
        dimensao: "Negócio",
        classeSEI: "Risco de Restrições do Programa",
        elementoSEI: "Recursos",
        desafio: "Não identificado",
        justificativaSEI: "Os altos custos de manutenção e o risco de migração para plataformas concorrentes são classificados como <strong>Risco de Restrições do Programa</strong> porque impõem limitações de ordem econômica e estratégica à sustentabilidade do ECOS, e não uma falha técnica no produto. O elemento <strong>Recursos</strong> se aplica porque o problema central é a alocação insuficiente ou ineficiente de recursos para manutenção e suporte, o que leva participantes a considerar a migração para plataformas concorrentes, uma restrição externa que condiciona a viabilidade do programa de engenharia do ecossistema. A área de desafio foi classificada como <strong>Não identificada</strong> porque os estudos analisados não apontam uma subcategoria mais específica dentro desse elemento, sendo a classificação em nível de elemento suficiente para descrever a natureza econômica do risco.",
        ecos: "Proprietário",
        exemplosEcos: {
            aberto: "",
            hibrido: "",
            proprietario: "Os estudos relataram esse risco em <strong>ECOS Proprietário</strong> devido aos custos de conversão do produto para diferentes plataformas gerados pelo multi-homing, aos esforços adicionais de marketing e manutenção simultânea, e à necessidade de mecanismos que elevem o switching cost para reter clientes. Os exemplos incluem Apple App Store, Google Play, Windows Phone Store, Facebook Platform e Myspace, conforme reportado por Hyrynsalmi et al. (2016) e Belo e Alves (2025)."
        },
        metrica: "Produtividade",
        justificativaMetrica: "Os altos custos de manutenção e o risco de migração para plataformas concorrentes afetam a <strong>produtividade</strong> porque consomem recursos que poderiam ser investidos em inovação e evolução da plataforma. O risco de migração agrava esse cenário ao ameaçar a base de participantes do ECOS, reduzindo a escala e a eficiência que sustentam a produtividade coletiva do ecossistema (Iansiti e Levien, 2004).",
        processoValor: "Captura de valor",
        justificativaProcesso: "Os altos custos de manutenção e o risco de migração para plataformas concorrentes afetam o processo de <strong>captura de valor</strong> porque a retenção de participantes e a gestão dos custos de mudança são dimensões centrais desse processo no ECOS. Quando os custos de manutenção são elevados e o risco de migração aumenta, o keystone perde capacidade de sustentar e ampliar sua base de participantes, comprometendo a apropriação contínua dos benefícios gerados pelo ecossistema (Burström et al., 2022).",
        solucoes: "S02 (Framework de Seleção de Fornecedores): Reduz riscos organizacionais e alinha decisões. / S14 (Prática de Robustez da Plataforma): Evita falhas que levam à migração. / S15 (Prática de Atrair e Reter Atores): Aumenta a fidelidade dos clientes.",
        estudos: ["E01", "E29"]
    },
    {
        id: "R21",
        risco: "Percepção de valor insuficiente para adesão e permanência no ECOS",
        descricao: "Este risco ocorre quando o ecossistema não consegue demonstrar valor claro aos participantes, ou quando, mesmo havendo reconhecimento desse valor, existe incerteza quanto à sua efetiva realização. Como consequência, aumenta o risco de abandono e de insucesso na adesão e permanência dos participantes.",
        cenario: "",
        dimensao: "Negócio",
        classeSEI: "Risco de Restrições do Programa",
        elementoSEI: "Contrato",
        desafio: "Atividades de desenvolvimento são dependentes de desenvolvedores terceiros",
        justificativaSEI: "A percepção de valor insuficiente para adesão e permanência no ECOS é classificada como <strong>Risco de Restrições do Programa</strong> porque a incapacidade de demonstrar valor claro aos participantes impõe uma restrição fundamental à sustentabilidade do ecossistema: sem valor percebido, não há adesão nem permanência. O elemento <strong>Contrato</strong> se aplica porque a relação entre o ECOS e seus participantes é condicionada por expectativas implícitas e explícitas de valor; quando essas expectativas não são atendidas, os vínculos que sustentam o ecossistema se desfazem. A área <strong>Atividades de desenvolvimento são dependentes de desenvolvedores terceiros</strong> foi selecionada porque a percepção de valor está atrelada ao engajamento de atores externos sobre os quais o ECOS tem controle limitado.",
        ecos: "Proprietário",
        exemplosEcos: {
            aberto: "",
            hibrido: "",
            proprietario: "Os estudos relataram esse risco em <strong>ECOS Proprietário</strong> devido à dependência da participação e do comprometimento de longo prazo dos atores em relação à percepção de valor gerado pelo ecossistema, comprometida pela priorização indevida de funcionalidades fora do MVP. Os exemplos incluem Case SECO (ecossistema finlandês), conforme reportado por Saarni et al. (2025)."
        },
        metrica: "Criação de Nichos",
        justificativaMetrica: "A percepção de valor insuficiente para adesão e permanência no ECOS afeta a <strong>criação de nichos</strong> porque inibe a adesão de novos participantes e a diversificação das contribuições. Quando os atores não percebem valor claro em sua participação, o ecossistema perde capacidade de atrair e reter os participantes especializados que sustentam a vitalidade e a inovação do ECOS (Iansiti e Levien, 2004).",
        processoValor: "Captura de valor",
        justificativaProcesso: "A percepção de valor insuficiente para adesão e permanência no ECOS afeta o processo de <strong>captura de valor</strong> porque a percepção de valor é o elemento central que motiva e legitima esse processo. Quando os participantes não percebem valor suficiente para justificar sua adesão ou permanência, o processo colapsa: sem participantes engajados, o ecossistema perde a base sobre a qual os benefícios são gerados e apropriados (Burström et al., 2022).",
        solucoes: "S02 (Framework de Seleção de Fornecedores): Ajuda a estruturar critérios de decisão sobre investimentos, alinhando a percepção de valor. / S15 (Prática de Atrair e Reter Atores): Mitiga o abandono por meio de práticas para reter participantes. / S21 (Método de Apoio à Decisão Multicritério): Ajuda a antecipar riscos e apoiar decisões estratégicas mais seguras.",
        estudos: ["E04", "E06"]
    },
    {
        id: "R22",
        risco: "Perda de controle da plataforma ou fragmentação do ecossistema",
        descricao: "Este risco ocorre quando falhas em um único serviço central paralisam toda a operação do ecossistema, situação agravada em ecossistemas de código aberto, nos quais desenvolvedores externos podem modificar diretamente a plataforma sem supervisão centralizada. Como consequência, o ecossistema fica sujeito à fragmentação.",
        cenario: "",
        dimensao: "Negócio",
        classeSEI: "Risco de Ambiente de Desenvolvimento",
        elementoSEI: "Sistema de Desenvolvimento",
        desafio: "Sem modelo de processo padronizado (processo)",
        justificativaSEI: "A perda de controle da plataforma ou fragmentação do ecossistema é classificada como <strong>Risco de Ambiente de Desenvolvimento</strong> porque emerge da ausência de padrões e mecanismos de controle que garantam a coerência da plataforma ao longo do tempo, e não de uma falha isolada em um componente. O elemento <strong>Sistema de Desenvolvimento</strong> se aplica porque o problema reside na arquitetura e nos processos que governam como o sistema é construído e evoluído, permitindo que modificações externas não controladas gerem inconsistências. A área <strong>Sem modelo de processo padronizado (processo)</strong> foi selecionada porque a fragmentação decorre da falta de governança sobre a evolução do sistema, e não de uma limitação técnica pontual.",
        ecos: "Proprietário",
        exemplosEcos: {
            aberto: "Os estudos relataram esse risco em <strong>ECOS de Código Aberto</strong> devido à abertura da plataforma para múltiplos fabricantes e desenvolvedores, que passam a alterar a API ou o hardware sem envolver o proprietário da plataforma, favorecendo a fragmentação e reduzindo o controle do mantenedor. Os exemplos incluem Android (smartphones, TVs e wearables), conforme reportado por Hartmann e Bosch (2016).",
            hibrido: "",
            proprietario: ""
        },
        metrica: "Robustez; Criação de Nichos",
        justificativaMetrica: "A perda de controle da plataforma ou fragmentação do ecossistema afeta a <strong>robustez</strong> e a <strong>criação de nichos</strong> porque cria inconsistências estruturais que reduzem a capacidade do ECOS de funcionar de forma coesa diante de perturbações. A criação de nichos também é prejudicada, pois a fragmentação dificulta a interoperabilidade e a colaboração entre participantes, desincentivando a especialização e a diversificação que enriquecem o ecossistema (Iansiti e Levien, 2004).",
        processoValor: "Criação e entrega de valor",
        justificativaProcesso: "A perda de controle da plataforma ou fragmentação do ecossistema afeta o processo de <strong>criação e entrega de valor</strong> porque a integridade e o controle da plataforma são pré-requisitos para que o ECOS crie e entregue valor de forma consistente. A fragmentação compromete ambos os processos: a criação de valor é prejudicada pela incoerência entre componentes, enquanto a entrega é afetada pela impossibilidade de garantir uma experiência uniforme e confiável para todos os participantes do ecossistema (Burström et al., 2022).",
        solucoes: "S04 (Framework de Variabilidade): Reduz riscos de inconsistências e fragmentação por meio de mecanismos de variabilidade. / S14 (Prática de Robustez da Plataforma): Evita a paralisação por falha em serviço único ao assegurar a robustez da arquitetura.",
        estudos: ["E25", "E28"]
    },
    {
        id: "R23",
        risco: "Fracasso em fases iniciais de implantação do ECOS",
        descricao: "Este risco ocorre quando falhas no design do produto mínimo viável reduzem sua atratividade para os clientes. Como consequência, o engajamento dos participantes nas fases iniciais de implantação é comprometido, aumentando as chances de insucesso do ecossistema.",
        cenario: "",
        dimensao: "Negócio",
        classeSEI: "Risco de Engenharia de Produto",
        elementoSEI: "Requisitos",
        desafio: "Engenharia de Requisitos (processo)",
        justificativaSEI: "O fracasso em fases iniciais de implantação do ECOS é classificado como <strong>Risco de Engenharia de Produto</strong> porque decorre de falhas na definição e na validação dos requisitos do produto mínimo viável (MVP), etapa central da construção do produto. O elemento <strong>Requisitos</strong> se aplica porque um MVP mal definido não atende às necessidades dos clientes e falha em engajar os participantes, comprometendo a viabilidade do ecossistema antes mesmo de sua consolidação. A área <strong>Engenharia de Requisitos (processo)</strong> foi selecionada porque as necessidades dos clientes e os critérios de valor do MVP precisam ser adequadamente elicitados e validados desde o início.",
        ecos: "Proprietário",
        exemplosEcos: {
            aberto: "",
            hibrido: "",
            proprietario: "Os estudos relataram esse risco em <strong>ECOS Proprietário</strong> devido ao fracasso do ecossistema ainda em sua fase inicial de operação, após a priorização indevida de funcionalidades fora do MVP. Os exemplos incluem Case SECO (ecossistema finlandês), conforme reportado por Saarni et al. (2025)."
        },
        metrica: "Criação de Nichos",
        justificativaMetrica: "O fracasso em fases iniciais de implantação do ECOS afeta a <strong>criação de nichos</strong> porque impede que os primeiros participantes se estabeleçam e criem as bases para o crescimento do ecossistema. Sem um MVP que atraia e engaje participantes iniciais, o ECOS não consegue atingir a massa crítica necessária para que nichos especializados se desenvolvam (Iansiti e Levien, 2004).",
        processoValor: "Captura de valor",
        justificativaProcesso: "O fracasso em fases iniciais de implantação do ECOS afeta o processo de <strong>captura de valor</strong> porque é nesse momento que os fundamentos da proposta de valor são estabelecidos e testados. O fracasso nessa etapa impede que o ecossistema consolide sua proposta de valor e inicia um ciclo de baixo engajamento que compromete a viabilidade da captura de valor no longo prazo (Burström et al., 2022).",
        solucoes: "S21 (Método de Apoio à Decisão Multicritério): Apoia decisões estratégicas mais seguras, especialmente no design do Produto Mínimo Viável (MVP).",
        estudos: ["E04"]
    },
    {
        id: "R24",
        risco: "Descontinuidade ou morte do ecossistema",
        descricao: "Este risco ocorre quando há ausência de conhecimento sobre as peculiaridades de funcionamento dos ecossistemas de software, somada à falta de mecanismos formais de governança. Como consequência, ao longo do tempo, essa combinação pode levar à obsolescência e, em última instância, à extinção do ecossistema.",
        cenario: "",
        dimensao: "Negócio",
        classeSEI: "Risco de Ambiente de Desenvolvimento",
        elementoSEI: "Processo de Desenvolvimento",
        desafio: "Sem modelo de processo padronizado (processo)",
        justificativaSEI: "A descontinuidade ou morte do ecossistema é classificada como <strong>Risco de Ambiente de Desenvolvimento</strong> porque resulta do acúmulo de falhas no processo de desenvolvimento e na governança ao longo do tempo, e não de um problema técnico isolado. O elemento <strong>Processo de Desenvolvimento</strong> se aplica porque a ausência de processos padronizados e de mecanismos de governança adequados, que deveriam orientar o ciclo de vida do ecossistema, é a principal causa raiz desse risco. A área <strong>Sem modelo de processo padronizado (processo)</strong> foi selecionada porque, sem processos que garantam a sustentabilidade e a evolução contínua do ECOS, a obsolescência e a extinção tornam-se desfechos praticamente inevitáveis.",
        ecos: "Proprietário",
        exemplosEcos: {
            aberto: "Os estudos relataram esse risco em <strong>ECOS de Código Aberto</strong> devido à ausência de conhecimento consolidado sobre as peculiaridades de governança da plataforma, evidenciada pela impossibilidade de confirmar diversas práticas de gestão de conflitos e de riscos por falta de documentação formal. Os exemplos incluem GNOME, conforme reportado por Oliveira e Alves (2021).",
            hibrido: "",
            proprietario: ""
        },
        metrica: "Robustez",
        justificativaMetrica: "A descontinuidade ou morte do ecossistema afeta a <strong>robustez</strong> porque representa a falha total dessa dimensão de saúde do ECOS. A robustez mede a capacidade do ecossistema de sobreviver a perturbações; sua ausência completa, evidenciada pela extinção do ECOS, indica que o sistema falhou em desenvolver os mecanismos necessários para resistir às pressões acumuladas ao longo do tempo. Prevenir esse risco é, portanto, o objetivo final da gestão da robustez do ecossistema (Iansiti e Levien, 2004).",
        processoValor: "Captura de valor",
        justificativaProcesso: "A descontinuidade ou morte do ecossistema afeta o processo de <strong>captura de valor</strong> porque inviabiliza permanentemente esse processo, extinguindo a plataforma que viabilizava a criação, entrega e apropriação dos benefícios por seus participantes. A morte do ecossistema representa a falha irreversível de todos os processos de valor, tornando este o risco de negócio mais crítico e de maior impacto para todos os atores envolvidos (Burström et al., 2022).",
        solucoes: "S15 (Prática de Atrair e Reter Atores): Reduz o risco de extinção do ecossistema ao reter participantes e fortalecer mecanismos de governança.",
        estudos: ["E18"]
    }
];

const container = document.getElementById('riscosContainer');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.btn-filter');

let riscoAtualIndex = 0;
let listaAtiva = [];
let dimensaoAtual = 'tecnicos'; // rastreia a cor da dimensão do risco aberto

// — Estado da seção "Exemplos de Ecossistemas em que esse Risco foi Observado" —
let riscoExemplosEcosAtual = {};
let riscoEcosCorAtual = 'tecnicos';

// Nome de exibição de cada tipo de ECOS, usado na mensagem de ausência de evidências
const ecosTipoInfo = {
    aberto: { nome: "ECOS de Código Aberto" },
    hibrido: { nome: "ECOS Híbrido" },
    proprietario: { nome: "ECOS Proprietário" }
};

// Chamado ao clicar (ou ativar via teclado) em um dos cards de tipo de ECOS
function selecionarEcosCard(tipo) {
    const info = ecosTipoInfo[tipo];
    if (!info) return;

    document.querySelectorAll('#riskEcosCards .ecos-card').forEach(card => {
        const ativo = card.dataset.ecos === tipo;
        const temExemplo = card.classList.contains('has-example');
        card.classList.remove('active');
        // Só remove a cor se ela não estiver marcando a presença permanente de exemplos
        if (!temExemplo) card.classList.remove('tecnicos', 'sociais', 'negocio');
        card.setAttribute('aria-pressed', ativo ? 'true' : 'false');
        if (ativo) card.classList.add('active', riscoEcosCorAtual);
    });

    const ecosJustBox = document.getElementById('riskEcosJustBox');
    const ecosJust = document.getElementById('riskEcosJust');
    if (!ecosJustBox || !ecosJust) return;

    const exemplo = riscoExemplosEcosAtual[tipo];
    if (exemplo) {
        ecosJust.innerHTML = `<p>${exemplo}</p>`;
    } else {
        ecosJust.innerHTML = `<p>Nenhum ecossistema do tipo "${info.nome}" foi identificado nos estudos primários para este risco.</p>`;
    }
    ecosJustBox.style.display = 'block';
}

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
    const justSEI = item.justificativaSEI || '';
    if (justSEI.trim()) {
        justText.innerText = justSEI.trim();
        justText.innerHTML = justSEI.trim();
        justBox.style.display = 'block';
        var t = document.getElementById('just-trigger-sei'), b = document.getElementById('just-body-sei');
        if (t) t.setAttribute('aria-expanded','false');
        if (b) b.classList.remove('open');
    } else {
        justBox.style.display = 'none';
    }

    // — Bloco 2a: Exemplos de Ecossistemas em que esse Risco foi Observado —
    riscoExemplosEcosAtual = item.exemplosEcos || {};
    riscoEcosCorAtual = classeCor;

    document.querySelectorAll('#riskEcosCards .ecos-card').forEach(card => {
        card.classList.remove('active', 'has-example', 'tecnicos', 'sociais', 'negocio');
        card.setAttribute('aria-pressed', 'false');
        // Indicação visual imediata: card já nasce colorido se houver exemplos cadastrados
        const tipo = card.dataset.ecos;
        const exemplo = riscoExemplosEcosAtual[tipo];
        if (exemplo && exemplo.trim()) {
            card.classList.add('has-example', classeCor);
        }
    });
    const ecosJustBox = document.getElementById('riskEcosJustBox');
    if (ecosJustBox) ecosJustBox.style.display = 'none';

    // — Bloco 2b: Métrica —
    document.getElementById('riskMetric').innerText = item.metrica || '—';
    const metricJustBox = document.getElementById('riskMetricJustBox');
    const metricJust = document.getElementById('riskMetricJust');
    if (item.justificativaMetrica && item.justificativaMetrica.trim()) {
        metricJust.innerHTML = item.justificativaMetrica.trim();
        metricJustBox.style.display = 'block';
        var t = document.getElementById('just-trigger-metrica'), b = document.getElementById('just-body-metrica');
        if (t) t.setAttribute('aria-expanded','false');
        if (b) b.classList.remove('open');
    } else {
        metricJustBox.style.display = 'none';
    }

    // — Bloco 2c: Processo de Valor —
    document.getElementById('riskProcesso').innerText = item.processoValor || '—';
    const processoJustBox = document.getElementById('riskProcessoJustBox');
    const processoJust = document.getElementById('riskProcessoJust');
    if (item.justificativaProcesso && item.justificativaProcesso.trim()) {
        processoJust.innerHTML = item.justificativaProcesso.trim();
        processoJustBox.style.display = 'block';
        var t = document.getElementById('just-trigger-processo'), b = document.getElementById('just-body-processo');
        if (t) t.setAttribute('aria-expanded','false');
        if (b) b.classList.remove('open');
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

function toggleJust(key) {
    var trigger = document.getElementById('just-trigger-' + key);
    var body    = document.getElementById('just-body-' + key);
    if (!trigger || !body) return;
    var isOpen = body.classList.contains('open');
    if (isOpen) {
        body.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
    } else {
        body.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
    }
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

        card.setAttribute('data-id', item.id);
        card.innerHTML = `
            <div class="card-header">
                <span class="id-tag">${item.id}</span>
                <span class="dimensao-tag">${item.dimensao}</span>
            </div>
            <div class="card-main-content">
                <h3>${item.risco}</h3>
                <p class="descricao">${item.descricao.substring(0, 120)}...</p>
                <div class="card-footer-area">
                    <button class="btn-ver-mais" style="background:${btnStyle.bg};border:1px solid ${btnStyle.border};color:${btnStyle.color};">Ver análise completa →</button>
                    <span class="ctx-relevance">
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        Relevante para seu contexto
                    </span>
                </div>
            </div>
        `;
        card.onclick = () => openRiskDetails(item.id);
        container.appendChild(card);
    });
}

/* ════ PAINEL DE CONTEXTO ════ */
const ctxState = { ecos: new Set(), metrica: new Set(), valor: new Set() };

// Estado do filtro de dimensão ativo (sincronizado com os botões .btn-filter)
var filtroAtivoDimensao = 'todos';

function toggleChip(chip) {
    var group = chip.getAttribute('data-group');
    var value = chip.getAttribute('data-value');
    chip.classList.toggle('active');
    if (chip.classList.contains('active')) ctxState[group].add(value);
    else ctxState[group].delete(value);
    _syncCtxUI(); _aplicarFiltrosCombinados();
}

function limparContexto() {
    ctxState.ecos.clear(); ctxState.metrica.clear(); ctxState.valor.clear();
    document.querySelectorAll('.ctx-chip.active').forEach(function(c){ c.classList.remove('active'); });
    _syncCtxUI(); _aplicarFiltrosCombinados();
}

function _totalAtivos() { return ctxState.ecos.size + ctxState.metrica.size + ctxState.valor.size; }

function _syncCtxUI() {
    var n = _totalAtivos();
    var clearEl = document.getElementById('ctxClear');
    var hintEl  = document.getElementById('ctxHint');
    if (clearEl) clearEl.style.display = n > 0 ? 'inline-flex' : 'none';
    if (hintEl) {
        if (n > 0) { var nRel = document.querySelectorAll('.card.ctx-highlighted').length; hintEl.textContent = nRel > 0 ? (nRel + ' risco' + (nRel !== 1 ? 's' : '') + ' em destaque') : ''; }
        else hintEl.textContent = '';
    }
}

function _calcularRelevanciaCtx(item) {
    if (_totalAtivos()===0) return 0;
    if (ctxState.ecos.size>0) {
        var mapaTipoEcos = { 'Aberto': 'aberto', 'Híbrido': 'hibrido', 'Proprietário': 'proprietario' };
        var matchEcos=false;
        ctxState.ecos.forEach(function(v){
            var chave = mapaTipoEcos[v];
            var exemplo = chave && item.exemplosEcos ? item.exemplosEcos[chave] : '';
            if (exemplo && exemplo.trim()) matchEcos = true;
        });
        if (!matchEcos) return 0;
    }
    if (ctxState.metrica.size>0) {
        var metricaRisco=item.metrica.toLowerCase(), matchMetrica=false;
        ctxState.metrica.forEach(function(v){ if(metricaRisco.indexOf(v.toLowerCase())!==-1) matchMetrica=true; });
        if (!matchMetrica) return 0;
    }
    if (ctxState.valor.size>0) {
        var valorRisco=item.processoValor.toLowerCase(), matchValor=false;
        ctxState.valor.forEach(function(v){ if(valorRisco.indexOf(v.toLowerCase())!==-1) matchValor=true; });
        if (!matchValor) return 0;
    }
    return 1;
}

/**
 * Função central de filtragem: aplica dimensão E chips de contexto juntos.
 * Chamada por qualquer alteração (botão de dimensão, chip ou busca).
 */
function _aplicarFiltrosCombinados(listaBase) {
    // Se recebeu lista explícita (busca textual), usa ela; senão filtra por dimensão
    var lista;
    if (listaBase !== undefined) {
        lista = listaBase;
    } else if (filtroAtivoDimensao === 'todos') {
        lista = dadosRiscos;
    } else {
        lista = dadosRiscos.filter(function(r) {
            var dRisco  = r.dimensao.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").substring(0, 5);
            var dFiltro = filtroAtivoDimensao.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").substring(0, 5);
            return dRisco === dFiltro;
        });
    }

    // Renderiza os cards filtrados por dimensão
    exibirRiscos(lista);

    // Agora aplica contexto sobre os cards renderizados
    _aplicarContexto();
}

function _aplicarContexto() {
    var container = document.getElementById('riscosContainer');
    if (!container) return;
    var cards = Array.prototype.slice.call(container.querySelectorAll('.card'));
    var emptyEl = document.getElementById('ctxEmptyState');

    if (_totalAtivos()===0) {
        cards.forEach(function(c){ c.classList.remove('ctx-highlighted','ctx-dim'); var b=c.querySelector('.ctx-relevance'); if(b) b.style.display='none'; });
        cards.sort(function(a,b){ var na=parseInt((a.querySelector('.id-tag')||{textContent:'R99'}).textContent.replace('R','')); var nb=parseInt((b.querySelector('.id-tag')||{textContent:'R99'}).textContent.replace('R','')); return na-nb; });
        cards.forEach(function(c){ container.appendChild(c); });
        if (emptyEl) emptyEl.style.display='none';
        _syncCtxUI(); return;
    }

    var scored = cards.map(function(card){
        var idTag=card.querySelector('.id-tag')?card.querySelector('.id-tag').textContent.trim():'';
        var item=dadosRiscos.find(function(r){ return r.id===idTag; });
        return { card:card, score:item?_calcularRelevanciaCtx(item):0 };
    });

    scored.forEach(function(s){
        var badge=s.card.querySelector('.ctx-relevance');
        if (s.score===1) { s.card.classList.add('ctx-highlighted'); s.card.classList.remove('ctx-dim'); if(badge) badge.style.display='inline-flex'; }
        else if (s.score===0) { s.card.classList.remove('ctx-highlighted'); s.card.classList.add('ctx-dim'); if(badge) badge.style.display='none'; }
        else { s.card.classList.remove('ctx-highlighted','ctx-dim'); if(badge) badge.style.display='none'; }
    });

    scored.sort(function(a,b){ return b.score-a.score; });
    scored.forEach(function(s){ container.appendChild(s.card); });

    var nDestaque=scored.filter(function(s){ return s.score===1; }).length;
    if (nDestaque===0) {
        if (!emptyEl) {
            emptyEl=document.createElement('div'); emptyEl.id='ctxEmptyState'; emptyEl.className='ctx-empty-state';
            emptyEl.innerHTML='<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg><p>Nenhum risco corresponde à combinação de filtros selecionada.</p><span>Tente remover um ou mais filtros para ampliar os resultados.</span>';
            container.parentNode.insertBefore(emptyEl, container);
        }
        emptyEl.style.display='flex';
    } else { if(emptyEl) emptyEl.style.display='none'; }
    _syncCtxUI();
}

/* ════ AUTOCOMPLETE ════ */

function configurarEventos() {
    var acList = document.getElementById('autocompleteList');
    var acWrap = document.getElementById('autocompleteWrap');
    var acIndex = -1;

    function normStr(s) { return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,''); }

    function highlightMatch(text, termo) {
        if (!termo) return text;
        var escaped = termo.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
        return text.replace(new RegExp('('+escaped+')','gi'),'<mark>$1</mark>');
    }

    function fecharAC() { if(acList){acList.hidden=true;acList.innerHTML='';} acIndex=-1; }

    function abrirAC(termoRaw, resultados) {
        if(!acList) return;
        acList.innerHTML=''; acIndex=-1;
        if(!termoRaw){acList.hidden=true;return;}
        if(resultados.length===0){
            var empty=document.createElement('li'); empty.className='ac-empty'; empty.textContent='Nenhum risco encontrado'; acList.appendChild(empty); acList.hidden=false; return;
        }
        resultados.slice(0,8).forEach(function(item){
            var li=document.createElement('li');
            var idSpan=document.createElement('span'); idSpan.className='ac-id'; idSpan.textContent=item.id;
            var body=document.createElement('span'); body.className='ac-body';
            var titleSpan=document.createElement('span'); titleSpan.className='ac-title'; titleSpan.innerHTML=highlightMatch(item.risco,termoRaw.trim());
            body.appendChild(titleSpan); li.appendChild(idSpan); li.appendChild(body);
            li.addEventListener('mousedown',function(e){ e.preventDefault(); searchInput.value=item.risco; _aplicarFiltrosCombinados([item]); fecharAC(); });
            acList.appendChild(li);
        });
        acList.hidden=false;
    }

    searchInput?.addEventListener('input', (e) => {
        const raw = e.target.value;
        const termo = normStr(raw);
        // Filtra por texto dentro da dimensão ativa
        const baseList = filtroAtivoDimensao === 'todos'
            ? dadosRiscos
            : dadosRiscos.filter(r => {
                const dRisco  = r.dimensao.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").substring(0,5);
                const dFiltro = filtroAtivoDimensao.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").substring(0,5);
                return dRisco === dFiltro;
              });
        const filtrados = baseList.filter(r => normStr(r.risco).includes(termo) || normStr(r.id).includes(termo));
        _aplicarFiltrosCombinados(filtrados);
        if(termo.length>=2) abrirAC(raw,filtrados); else fecharAC();
    });

    searchInput?.addEventListener('keydown',function(e){
        if(!acList||acList.hidden) return;
        var items=acList.querySelectorAll('li:not(.ac-empty)'); if(!items.length) return;
        if(e.key==='ArrowDown'){e.preventDefault();acIndex=Math.min(acIndex+1,items.length-1);}
        else if(e.key==='ArrowUp'){e.preventDefault();acIndex=Math.max(acIndex-1,-1);}
        else if(e.key==='Enter'&&acIndex>=0){e.preventDefault();items[acIndex].dispatchEvent(new MouseEvent('mousedown'));return;}
        else if(e.key==='Escape'){fecharAC();return;} else return;
        items.forEach(function(li,i){li.classList.toggle('ac-active',i===acIndex);});
        if(acIndex>=0) items[acIndex].scrollIntoView({block:'nearest'});
    });
    searchInput?.addEventListener('blur',function(){ setTimeout(fecharAC,150); });
    document.addEventListener('click',function(e){ if(acWrap&&!acWrap.contains(e.target)) fecharAC(); });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.btn-filter.active')?.classList.remove('active');
            btn.classList.add('active');

            filtroAtivoDimensao = btn.getAttribute('data-filter');
            _aplicarFiltrosCombinados();
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
        titulo: "Exemplos de Ecossistemas em que esse Risco foi Observado",
        texto: "Este campo apresenta uma síntese das evidências encontradas nos estudos primários que fundamentam o catálogo. Ao selecionar um dos três tipos de ecossistema (ECOS de Código Aberto, ECOS Híbrido ou ECOS Proprietário, segundo a tipologia de Manikas, 2016), são exibidos os exemplos citados na literatura para aquele risco, junto com a descrição do respectivo tipo de ECOS. Quando os estudos primários não relatam explicitamente o risco em determinado tipo de ecossistema, a seleção do card correspondente exibe uma mensagem informando a ausência de evidências — o que não significa que o risco seja inaplicável àquele tipo, apenas que não há relato explícito nos estudos analisados.",
        fonte: "Fonte: Revisiting software ecosystems research: A longitudinal literature study – Manikas (2016)"
    },
    metrica: {
        titulo: "Métricas de Saúde do ECOS atingida pelo Risco",
        texto: "Este campo identifica o impacto do risco na saúde do ecossistema, utilizando os indicadores propostos por Iansiti e Levien (2004). O risco pode afetar a Produtividade do sistema, sua Robustez frente a mudanças ou sua capacidade de gerar novos Nichos de Criação (inovação). Identificar essa métrica ajuda a priorizar ações de mitigação estratégicas.",
        fonte: "Fonte: Strategy as Ecology – Iansiti e Levien (2004)"
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
