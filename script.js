/**
 * DADOS DO CATÁLOGO - 24 RISCOS COMPLETOS
 */
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
        ecos: "Híbrido / Aberto",
        justificativa: " A interconexão e o uso massivo de bibliotecas de terceiros nesses ecossistemas criam vetores críticos para a injeção de código malicioso durante o desenvolvimento e distribuição. Essa dependência estrutural permite que falhas upstream comprometam toda a rede integrada",
        metrica: "Robustez",
        processoValor: "Criação e entrega de valor",
        solucoes: "S01 (Framework HIN/Metapath2Vec): Reduz a exposição a bibliotecas maliciosas, fortalecendo a cadeia de suprimentos. / S05 (Framework TrustSECO): Registra e calcula fatos de confiança, apoiando a detecção de vulnerabilidades. / S20 (Método de Gerenciamento): Utiliza grafos de conhecimento para identificar vulnerabilidades e calcular escores de confiabilidade na cadeia."
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
        ecos: "Híbrido",
        justificativa: "Ecossistemas híbridos são propensos a atrasos na aplicação de correções (patches) devido a seus múltiplos componentes. O crescimento transitivo dessas dependências amplia a superfície de ataque, deixando as aplicações expostas e propagando as vulnerabilidades conhecidas",
        metrica: "Robustez",
        processoValor: "Criação e entrega de valor",
        solucoes: "S05 (Framework TrustSECO): Apoia a detecção de vulnerabilidades. / S18 (Ferramenta DepReveal): Identifica vulnerabilidades e classifica advisories, reduzindo o tempo de exposição."
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
        ecos: "Aberto",
        justificativa: "A disseminação ao software de código aberto faz com que falhas se propaguem em múltiplos componentes que estão além do controle direto dos desenvolvedores. A estrutura descentralizada aberta intensifica esse problema.",
        metrica: "Robustez",
        processoValor: "Criação de valor",
        solucoes: "S05 (Framework TrustSECO): Ajuda na detecção de vulnerabilidades em geral. / S18 (Ferramenta DepReveal): Ferramenta de descoberta e análise de vulnerabilidades em projetos NPM."
    },
    {
        id: "R04",
        risco: "Incompatibilidade entre versões de bibliotecas interdependentes",
        descricao: "Falhas na manutenção e evolução de projetos (não relacionadas à segurança) que surgem devido à incompatibilidade entre versões de bibliotecas em redes extensas, agravada pelo uso de versões desatualizadas. Tais problemas podem gerar impactos em cascata em projetos interdependentes.",
        cenario: "",
        dimensao: "Técnico",
        classeSEI: "Risco de Engenharia de Produto",
        elementoSEI: "Integração e teste",
        desafio: "Não identificado",
        ecos: "Híbrido",
        justificativa: "Em ambientes híbridos, a integração de redes extensas de bibliotecas interdependentes e o uso de versões desatualizadas aumentam as chances de falhas na manutenção e evolução do software. Essa incompatibilidade pode gerar impactos em cascata entre os projetos de integração e teste",
        metrica: "Produtividade",
        processoValor: "Entrega de valor",
        solucoes: "S19 (Ferramenta smartPip): Resolve conflitos de dependência por meio de restrições lógicas e otimização, prevenindo falhas de instalação."
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
        ecos: "Aberto",
        justificativa: "Repositórios públicos são elementos chave de ecossistemas abertos e facilitam a exploração por agentes mal-intencionados. O aumento da superfície de ataque atrelado a disponibilidade do código impacta a segurança dos sistemas",
        metrica: "Robustez",
        processoValor: "Criação de valor",
        solucoes: "S05 (Framework TrustSECO): Ajuda a reconfigurar sistemas após ataques e apoia a detecção. / S17 (Prática SLA): Auxilia na redução de riscos técnicos e organizacionais (o que inclui ataques)."
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
        ecos: "Aberto",
        justificativa: "",
        metrica: "Robustez",
        processoValor: "Criação de valor",
        solucoes: "S01 (Framework HIN/Metapath2Vec): Reduz a exposição a bibliotecas maliciosas. / S05 (Framework TrustSECO): Apoia a detecção de vulnerabilidades e reconfiguração de sistemas. / S16 (Prática de Mecanismos de Segurança): Contribui para prevenir uploads maliciosos e aumenta a rastreabilidade."
    },
    {
        id: "R07",
        risco: "Atualizações inseguras de dependências em bibliotecas compartilhada",
        descricao: "O risco ocorre quando o processo de atualização de dependências introduz falhas, como a execução de código não verificado por meio de pull requests.",
        cenario: "",
        dimensao: "Técnico",
        classeSEI: "Risco de Engenharia de Produto",
        elementoSEI: "Código e teste unitário",
        desafio: "Não identificado",
        ecos: "Híbrido/ Aberto",
        justificativa: "",
        metrica: "Produtividade",
        processoValor: "Entrega de valor",
        solucoes: "S05 (Framework TrustSECO): Pode auxiliar na detecção de vulnerabilidades introduzidas, através do registro de fatos de confiança."
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
        ecos: "Aberto",
        justificativa: "",
        metrica: "Produtivdade",
        processoValor: "Entrega de valor",
        solucoes: "S14 (Prática de Robustez da Plataforma): Mitiga vulnerabilidades estruturais e planeja a evolução, o que é essencial para conter a propagação de bugs."
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
        ecos: "Aberto",
        justificativa: "",
        metrica: "Robustez",
        processoValor: "Criação de valor",
        solucoes: "S12 (Modelo de Envelhecimento): Prever a obsolescência a partir do uso permite planejar atualizações e mitigar o risco de abandono e manutenção. / S15 (Prática de Atrair e Reter Atores): Pode garantir a continuidade do projeto em caso de abandono"
    },
    {
        id: "R10",
        risco: "Envelhecimento de bibliotecas abertas amplamente utilizadas",
        descricao: "A ausência de manutenção em bibliotecas amplamente utilizadas aumenta a exposição a falhas e vulnerabilidades, ampliando os riscos de manutenção e segurança para sistemas dependentes",
        cenario: "",
        dimensao: "Técnico",
        classeSEI: "Risco da Engenharia de Produto",
        elementoSEI: "Integraçºao e teste",
        desafio: "Não identificado",
        ecos: "Aberto",
        justificativa: "",
        metrica: "Produtividade",
        processoValor: "Criação e entrega de valor",
        solucoes: "S12 (Modelo de Envelhecimento): Prever a obsolescência permite planejar atualizações e reduzir riscos de manutenção e segurança"
    },
    {
        id: "R11",
        risco: "Fragilidades na infraestrutura compartilhada de desenvolvimento",
        descricao: "A ausência de modelos de processo padronizados, dificuldades na coleta de requisitos e incerteza em manter padrões de qualidade na infraestrutura de desenvolvimento comprometem a confiabilidade e aumentam a probabilidade de falhas.",
        cenario: "",
        dimensao: "Técnico",
        classeSEI: "Risco de Ambiente de Desenvolvimento",
        elementoSEI: "Sistema de Desenviolvimento",
        desafio: "Sem modelo de processo padronizado (processo)",
        ecos: "Híbrido",
        justificativa: "",
        metrica: "Produtividade; Robustez",
        processoValor: "Captura de valor",
        solucoes: "S14 (Prática de Robustez da Plataforma): Mitiga vulnerabilidades estruturais e fortalece a arquitetura, o que inclui a infraestrutura"
    },
    {
        id: "R12",
        risco: "Perda de confiança devido a pacotes maliciosos ou enganosos no ecossistema",
        descricao: "Pacotes podem ser rotulados de forma enganosa para ocultar funcionalidades prejudiciais, ou vulnerabilidades podem gerar danos à reputação e à relação de confiança com os usuários e provedores. O risco se intensifica com o crescimento e a distribuição da confiança entre múltiplos atores.",
        cenario: "",
        dimensao: "Social",
        classeSEI: "Risco de Ambiente de Desenvolvimento",
        elementoSEI: "Métodos de Gestão",
        desafio: "Garantia de Qualidade (processo); Gestão de Evolução (arquitetura)",
        ecos: "Hibrido",
        justificativa: "",
        metrica: "Criação de Nichos; Robustez",
        processoValor: "Captura de valor",
        solucoes: "Modelos de receita compartilhada (RevShare)."
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
        ecos: "Híbrido",
        justificativa: "",
        metrica: "Produtividade; Criação de Nichos",
        processoValor: "Captura de valor",
        solucoes: "S10 (Modelo de Technical Leverage): Indica projetos mais expostos a falhas, expondo o risco do moral hazard. / S15 (Prática de Atrair e Reter Atores): Práticas de governança podem ajudar a mitigar conflitos e alinhar incentivos."
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
        ecos: "Híbrido",
        justificativa: "",
        metrica: "Produtividade",
        processoValor: "Entrega de valor",
        solucoes: "S15 (Prática de Atrair e Reter Atores): Fundamental para mitigar conflitos e promover coordenação. / S17 (Prática SLA): Formaliza expectativas e comunicação em contextos como serviço."
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
        ecos: "Aberto; Híbrido",
        justificativa: "",
        metrica: "Robustez",
        processoValor: "Captura de valor",
        solucoes: "S02 (Framework de Seleção de Fornecedores): Permite estruturar critérios de decisão, reduzindo riscos organizacionais. / S10 (Modelo de Technical Leverage): Fornece métricas para a governança. / S15 (Prática de Atrair e Reter Atores): Trata de práticas de governança. / S17 (Prática SLA): Formaliza regras e expectativas."
    },
    {
        id: "R16",
        risco: "Sobrecarga de mantenedores de múltiplos pacotes críticosragmentação do Ecossistema (Forking)",
        descricao: "A ausência de remuneração e de processos formais para gerenciar contribuições externas aumenta a carga de trabalho dos mantenedores, arriscando a continuidade dos projetos e ampliando a possibilidade de falhas por sobrecarga.",
        cenario: "",
        dimensao: "Social",
        classeSEI: "Risco de Ambiente de Desenvolvimento",
        elementoSEI: "Processo de Gestão",
        desafio: "Coordenação e Gestão de Desenvolvimento (processo)",
        ecos: "Aberto",
        justificativa: "",
        metrica: "Produtividade; Criação de Nichos",
        processoValor: "Captura de valor",
        solucoes: "S15 (Prática de Atrair e Reter Atores): Práticas de governança voltadas a atrair e reter participantes são fundamentais para aliviar a carga de trabalho."
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
        ecos: "ECOS sem fins lucrativos",
        justificativa: "",
        metrica: "Robustez",
        processoValor: "Criação de valor",
        solucoes: "S15 (Prática de Atrair e Reter Atores): A retenção e o apoio a colaboradores mitigam o risco de abandono ou indisponibilidade de mantenedores-chave"
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
        ecos: "Aberto",
        justificativa: "",
        metrica: "Robustez",
        processoValor: "Criação de valor",
        solucoes: "S05 (Framework TrustSECO): Registra fatos de confiança. / S08 (Modelo de Metas e Anti-Metas): Ajuda a analisar riscos ligados a motivações maliciosas. / S16 (Prática de Mecanismos de Segurança): Adoção de mecanismos como controle de permissões e auditoria previne uploads maliciosos"
    },
    {
        id: "R19",
        risco: "Ausência ou deficiência de documentação das plataformas",
        descricao: "A falta de documentação adequada (e.g., javadoc ou arquivos obrigatórios) ou documentações incompletas/pouco claras dificulta o trabalho dos desenvolvedores, reduz a percepção de riscos (e.g., inserção de modelos maliciosos) e compromete a validação de propostas e a segurança.",
        cenario: "",
        dimensao: "Négocio",
        classeSEI: "Risco de Ambiente de Desenvolvimento",
        elementoSEI: "Processo de Desenvolvimento",
        desafio: "Sem modelo de processo padronizado (processo)",
        ecos: "Híbrido",
        justificativa: "",
        metrica: "Produtividade; Criação de Nichos",
        processoValor: "Criação e entrega de valor",
        solucoes: "S21 (Método de Apoio à Decisão Multicritério): A análise conjunta de requisitos de mercado e de engenharia pode mitigar riscos de integração causados pela falta de clareza."
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
        ecos: "Aberto",
        justificativa: "",
        metrica: "Produtividade",
        processoValor: "Captura de valor",
        solucoes: "S02 (Framework de Seleção de Fornecedores): Reduz riscos organizacionais e alinha decisões. / S14 (Prática de Robustez da Plataforma): Evita falhas que levam à migração. / S15 (Prática de Atrair e Reter Atores): Aumenta a fidelidade dos clientes"
    },
    {
        id: "R21",
        risco: "Percepção de valor insuficiente para adesão e permanência no ECOS",
        descricao: "O fracasso do ECOS em oferecer valor claro aos participantes leva ao abandono. Mesmo quando há reconhecimento de valor, a incerteza quanto à realização do valor esperado aumenta o risco de insucesso.",
        cenario: "",
        dimensao: "Negócio",
        classeSEI: "Risco de Restrições do Programa",
        elementoSEI: "Contrato",
        desafio: "Atividades de desenvolvimento são alatamente depedentes de desenvolvedores terceiros",
        ecos: "Híbrido",
        justificativa: "",
        metrica: "Criação de Nichos",
        processoValor: "Captura de valor",
        solucoes: "S02 (Framework de Seleção de Fornecedores): Ajuda a estruturar critérios de decisão sobre investimentos, alinhando a percepção de valor. / S15 (Prática de Atrair e Reter Atores): Práticas para reter participantes mitigam o abandono. / S21 (Método de Apoio à Decisão Multicritério): Ajuda a antecipar riscos e apoiar decisões estratégicas mais seguras"
    },
    {
        id: "R22",
        risco: "Perda de controle da plataforma ou fragmentação do ecossistem",
        descricao: "Falhas em um único serviço podem paralisar toda a operação. O risco é ampliado em ECOS de código aberto onde desenvolvedores externos podem modificar diretamente a plataforma, gerando fragmentação.",
        cenario: "",
        dimensao: "Negócio",
        classeSEI: "Risco de Ambiente de Desenvolvimento",
        elementoSEI: "Sistema de Desenvolvimento",
        desafio: "Sem modelo de processo padronizado (processo)",
        ecos: "Híbrido",
        justificativa: "",
        metrica: "Robustez; Criação de Nichos",
        processoValor: "Criação e entrega de valor",
        solucoes: "S04 (Framework de Variabilidade): Demonstra que mecanismos de variabilidade ajudam a reduzir riscos de inconsistências e fragmentação. / S14 (Prática de Robustez da Plataforma): Assegurar a robustez da arquitetura evita a paralisação por falha em serviço único."
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
        ecos: "Aberto",
        justificativa: "",
        metrica: "Criação de Nichos",
        processoValor: "Captura de valor",
        solucoes: "S21 (Método de Apoio à Decisão Multicritério): Pode apoiar decisões estratégicas mais seguras , o que é crítico no design do Produto Mínimo Viável (MVP)."
    },
    {
        id: "R24",
        risco: "Descontinuidade ou morte do ecossistema",
        descricao: "Ocorre devido à ausência de conhecimento sobre as peculiaridades dos ECOS, aliada à falta de mecanismos de governança, o que pode levar à obsolescência e, em última instância, à extinção do ECOS",
        cenario: "",
        dimensao: "Negócio",
        classeSEI: "Risco de Ambiente de Desenvolvimwento",
        elementoSEI: "Processo de Desenvolvimento",
        desafio: "Sem modelo de processo padronizado (processo)",
        ecos: "Aberto",
        justificativa: "",
        metrica: "Robustez",
        processoValor: "Captura de valor",
        solucoes: "S15 (Prática de Atrair e Reter Atores): A ausência de mecanismos de governança pode levar à extinção. A retenção de participantes é crucial para a sustentabilidade"
    }
];
const container = document.getElementById('riscosContainer');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.btn-filter');

/**
 * LÓGICA DE RENDERIZAÇÃO
 */
function exibirRiscos(lista) {
    if (!container) return;
    container.innerHTML = "";

    if (lista.length === 0) {
        container.innerHTML = `<p class="no-results">Nenhum risco encontrado para sua busca.</p>`;
        return;
    }

    lista.forEach(item => {
        const card = document.createElement('div');
        // Normalização agressiva para o CSS funcionar com plural/singular
        const rawDim = item.dimensao.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const classeCSS = rawDim.endsWith('s') ? rawDim.slice(0, -1) : rawDim;
        
        card.className = `card ${classeCSS} ${classeCSS}s`;
        
        card.innerHTML = `
            <div class="card-header">
                <span class="id-tag">${item.id}</span>
                <span class="dimensao-tag">${item.dimensao}</span>
            </div>
            <div class="card-main-content">
                <h3>${item.risco}</h3>
                <p class="descricao">${item.descricao}</p>
            </div>
            <div class="card-details">
                <div class="detail-item"><strong>Cenário Real:</strong> ${item.cenario || 'Não detalhado.'}</div>
                <div class="info-grid">
                    <div class="info-grid">
                        <div class="info-unit"><small>Classe de Risco SEI</small><p>${item.classeSEI}</p></div>
                        <div class="info-unit"><small>Elemento SEI</small><p>${item.elementoSEI}</p></div>
                        <div class="info-unit"><small>Área de Desafio</small><p>${item.desafio}</p></div>
                        <div class="info-unit"><small>ECOS mais Propício ao Risco</small><p>${item.ecos}</p></div>
    
                        <div class="info-unit"><small>Métrica de Saúde Atingida</small><p>${item.metrica}</p></div>
                         <div class="info-unit"><small>Processo de Valor Ameaçado</small><p>${item.processoValor}</p></div>
                    </div>

<div class="extra-info">
    <p><strong>Justificativa para classificação do ECOS:</strong> ${item.justificativa}</p>
</div>
                <div class="solucao-box">
                    <strong>Soluções Identificadas:</strong>
                    <p>${item.solucoes}</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

/**
 * FILTROS E BUSCA (INTELIGENTE: IGNORA SINGULAR/PLURAL)
 */
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
                    // Pega apenas o começo da palavra (ex: "tecnic") para bater singular e plural
                    const dRisco = r.dimensao.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").substring(0, 5);
                    const dFiltro = filtro.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").substring(0, 5);
                    return dRisco === dFiltro;
                });
                exibirRiscos(filtrados);
            }
        });
    });
}

/**
 * NAVEGAÇÃO E INICIALIZAÇÃO
 */
const scrollToSection = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
function scrollToCatalog() { scrollToSection('catalogo'); }
function scrollToContact() { scrollToSection('contato'); }
function scrollToTutorial() { scrollToSection('tutorial'); }

document.addEventListener('DOMContentLoaded', () => {
    exibirRiscos(dadosRiscos);
    configurarEventos();
});