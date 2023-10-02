function loadContracts() {
    const companySelect = document.getElementById("companySelect");
    const selectedCompany = companySelect.value;
    const contractDetails = document.getElementById("contractDetails");

    if (selectedCompany === "TALENTOS LOCADORA") {
        const contracts = [
            {
                orgao: "EMLUR PB",
                edital: "013/2020",
                processo: "2019/03785",
                numeroContrato: "013/2020",
                dataAssinatura: "09/06/2020",
                renovacao: "12 meses iniciais + 60 meses",
                mesReajuste: "Fevereiro",
                dataLimiteReajuste: "20/05/2023",
                veiculos: "18 Caminhões",
                valorUnitario: "R$ 409.442,39",
                valorTotal: "R$ 4.913.308,68"
            },
            {
                orgao: "FUNDASE RN",
                edital: "04/2020",
                processo: "3510015001002/2020",
                numeroContrato: "15/2020",
                dataAssinatura: "06/07/2020",
                renovacao: "12 meses iniciais + 60 meses",
                mesReajuste: "Abril",
                dataLimiteReajuste: "21/06/2023",
                veiculos: "2 MiniVan",
                valorUnitario: "R$ 7.194,60",
                valorTotal: "R$ 86.335,20"
            },
            {
                orgao: "SECRETARIA DE ESTADO DA SAUDE PUBLICA - SESAP RN",
                edital: "-",
                processo: "-",
                numeroContrato: "02/2022",
                dataAssinatura: "29/12/2021",
                renovacao: "12 meses iniciais + 60 meses",
                mesReajuste: "Setembro",
                dataLimiteReajuste: "29/12/2023",
                veiculos: "2 Caminhões Baú",
                valorUnitario: "R$ 15.600,00",
                valorTotal: "R$ 187.200,00"
            },
            {
                orgao: "SECRETARIA DE ESTADO DA SAUDE PUBLICA - SESAP RN",
                edital: "-",
                processo: "-",
                numeroContrato: "208/2022",
                dataAssinatura: "16/11/2022",
                renovacao: "12 meses iniciais + 60 meses",
                mesReajuste: "Outubro",
                dataLimiteReajuste: "16/11/2023",
                veiculos: "2 Caminhões Baú",
                valorUnitario: "R$ 13.694,00",
                valorTotal: "R$ 164.328,00"
            },
            {
                orgao: "SECRETARIA MUNICIPAL DA EDUCAÇÃO - SME RN",
                edital: "-",
                processo: "-",
                numeroContrato: "33/2022",
                dataAssinatura: "20/06,2022",
                renovacao: "12 meses iniciais + 60 meses",
                mesReajuste: "Março",
                dataLimiteReajuste: "20/06/2023",
                veiculos: "1 HYUNDAI/HR",
                valorUnitario: "R$ 6.390,00",
                valorTotal: "R$ 76.680,00"
            },
            {
                orgao: "ASSEMBLEIA LEGISLATIVA DO RIO GRANDE DO NORTE",
                edital: "-",
                processo: "-",
                numeroContrato: "065/2020",
                dataAssinatura: "30/11/2020",
                renovacao: "12 meses iniciais + 60 meses",
                mesReajuste: "Agosto",
                dataLimiteReajuste: "30/11/2023",
                veiculos: "1 Caminhão Baú",
                valorUnitario: "R$ 4.486,11",
                valorTotal: "R$ 53.833,32"
            }, 
            {
                orgao: "SEC.MUNICIPAL DO TRABALHO E ASS. SOCIAL DO RN - SEMTAS",
                edital: "-",
                processo: "-",
                numeroContrato: "50/2021",
                dataAssinatura: "06/12/2021",
                renovacao: "12 meses iniciais + 60 meses",
                mesReajuste: "Setembro",
                dataLimiteReajuste: "06/12/2023",
                veiculos: "1 Caminhão Baú e uma MiniVan",
                valorUnitario: "R$ 14.309,00",
                valorTotal: "R$ 171.708,00"
            },
            {
                orgao: "EMLURB",
                edital: "014/2020",
                processo: "014/2020",
                numeroContrato: "6.013/2021",
                dataAssinatura: "13/05/2021",
                renovacao: "12 meses iniciais + 60 meses",
                mesReajuste: "Janeiro",
                dataLimiteReajuste: "13/05/2024",
                veiculos: "1 Caminhão",
                valorUnitario: "R$ 7.580,70",
                valorTotal: "R$ 90.968,40"
            },
            {
                orgao: "SECRETARIA MUNICIPAL DE EDUCAÇÃO E CULTURA - SEMEC",
                edital: "-",
                processo: "-",
                numeroContrato: "066/2022",
                dataAssinatura: "16/09/2023",
                renovacao: "12 meses iniciais + 60 meses",
                mesReajuste: "Junho",
                dataLimiteReajuste: "16/09/2023",
                veiculos: "1 Caminhão",
                valorUnitario: "R$ 7.919,00",
                valorTotal: "R$ 95.028,00"
            }, 
            {
                orgao: "SECRETARIA MUNICIPAL DE SAÚDE DE NATAL - SMS RN",
                edital: "-",
                processo: "-",
                numeroContrato: "119/2022",
                dataAssinatura: "30/09/2022",
                renovacao: "12 meses iniciais + 60 meses",
                mesReajuste: "Junho",
                dataLimiteReajuste: "30/09/2023",
                veiculos: "3 Caminhão Baú",
                valorUnitario: "R$ 17.325,00",
                valorTotal: "R$ 207.900,00"
            }, 
            {
                orgao: "SECRETARIA MUNICIPAL DE SAÚDE - CARUARU",
                edital: "077/2019",
                processo: "063/2019",
                numeroContrato: "039/2020",
                dataAssinatura: "07/05/2021",
                renovacao: "12 meses iniciais + 60 meses",
                mesReajuste: "Fevereiro",
                dataLimiteReajuste: "07/05/2024",
                veiculos: "3 Caminhão Baú",
                valorUnitario: "R$ 1.600,00",
                valorTotal: "R$ 19.200,00"
            },
            
        ];

        let contractInfo = '';

        for (const contract of contracts) {
            contractInfo += `
                <div class="contract-details">
                    <p><strong>Órgão:</strong> ${contract.orgao}</p>
                    <p><strong>Número do Edital:</strong> ${contract.edital}</p>
                    <p><strong>Número do Processo:</strong> ${contract.processo}</p>
                    <p><strong>Número do Contrato:</strong> ${contract.numeroContrato}</p>
                    <p><strong>Data da Assinatura do Contrato:</strong> ${contract.dataAssinatura}</p>
                    <p><strong>Condições para Renovação:</strong> ${contract.renovacao}</p>
                    <p><strong>Mês para Solicitação de Reajuste:</strong> ${contract.mesReajuste}</p>
                    <p><strong>Data Limite para Reajuste:</strong> ${contract.dataLimiteReajuste}</p>
                    <p><strong>Veículos:</strong> ${contract.veiculos}</p>
                    <p><strong>Valor Unitário:</strong> ${contract.valorUnitario}</p>
                    <p><strong>Valor Total:</strong> ${contract.valorTotal}</p>
                </div>
                <hr>
            `;
        }

        contractDetails.innerHTML = contractInfo;
    } else {
        contractDetails.innerHTML = '';
    }
}
