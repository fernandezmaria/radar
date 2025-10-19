const dashboardData = {
  kpis: [
    { name: "Total banco", revenue: 1240, yoy: 8.4, budget: 92 },
    { name: "Cross Border", revenue: 312, yoy: 12.1, budget: 88 },
    { name: "Sostenibilidad", revenue: 198, yoy: 17.6, budget: 105 },
    { name: "Clientes nuevos", revenue: 156, yoy: 9.8, budget: 98 },
    { name: "Clientes uptiers", revenue: 226, yoy: -2.3, budget: 81 }
  ],
  pipelineKpi: {
    opportunities: 178,
    yoy: 6.2,
    revenue: 190
  },
  sectors: [
    {
      name: "Consumer",
      revenue: 245,
      yoyYear: 7.1,
      yoyMonth: 1.8,
      clients: { total: 68, growth: 5.2, new: 14, uptier: 9 },
      managingDirectors: 6,
      regions: {
        Europa: 102,
        América: 62,
        "Asia Pacífico": 48,
        "Oriente Medio": 33
      },
      products: { GM: 96, IBF: 84, GTB: 65 },
      pipeline: { open: 28, closed: 14, yoy: 7.5, mom: 1.9, revenue: 38 }
    },
    {
      name: "Energy",
      revenue: 198,
      yoyYear: 9.3,
      yoyMonth: 2.1,
      clients: { total: 54, growth: 4.4, new: 11, uptier: 7 },
      managingDirectors: 5,
      regions: {
        Europa: 88,
        América: 48,
        "Asia Pacífico": 34,
        "Oriente Medio": 28
      },
      products: { GM: 74, IBF: 68, GTB: 56 },
      pipeline: { open: 24, closed: 11, yoy: 6.4, mom: 1.6, revenue: 35 }
    },
    {
      name: "Industrials",
      revenue: 287,
      yoyYear: 5.9,
      yoyMonth: 1.2,
      clients: { total: 72, growth: 3.1, new: 12, uptier: 10 },
      managingDirectors: 7,
      regions: {
        Europa: 118,
        América: 76,
        "Asia Pacífico": 56,
        "Oriente Medio": 37
      },
      products: { GM: 108, IBF: 96, GTB: 83 },
      pipeline: { open: 32, closed: 16, yoy: 4.8, mom: 1.1, revenue: 42 }
    },
    {
      name: "Infra",
      revenue: 176,
      yoyYear: 6.7,
      yoyMonth: 2.4,
      clients: { total: 47, growth: 6.9, new: 9, uptier: 6 },
      managingDirectors: 4,
      regions: {
        Europa: 74,
        América: 42,
        "Asia Pacífico": 31,
        "Oriente Medio": 29
      },
      products: { GM: 62, IBF: 58, GTB: 56 },
      pipeline: { open: 21, closed: 9, yoy: 5.7, mom: 1.8, revenue: 28 }
    },
    {
      name: "TMT",
      revenue: 334,
      yoyYear: 10.8,
      yoyMonth: 3.7,
      clients: { total: 83, growth: 7.5, new: 18, uptier: 13 },
      managingDirectors: 8,
      regions: {
        Europa: 146,
        América: 92,
        "Asia Pacífico": 62,
        "Oriente Medio": 34
      },
      products: { GM: 126, IBF: 112, GTB: 96 },
      pipeline: { open: 36, closed: 19, yoy: 8.3, mom: 2.5, revenue: 47 }
    }
  ],
  projects: [
    {
      name: "Programa Alfa",
      sectors: {
        Consumer: { label: "En curso", state: "progress" },
        Energy: { label: "Planificación", state: "info" },
        Industrials: { label: "En riesgo", state: "warning" },
        Infra: { label: "En curso", state: "progress" },
        TMT: { label: "Cierre", state: "success" }
      }
    },
    {
      name: "Green Horizon",
      sectors: {
        Consumer: { label: "Sin impacto", state: "neutral" },
        Energy: { label: "Ejecución", state: "progress" },
        Industrials: { label: "Aprobación", state: "info" },
        Infra: { label: "En riesgo", state: "warning" },
        TMT: { label: "Planificación", state: "info" }
      }
    },
    {
      name: "Consumer 360",
      sectors: {
        Consumer: { label: "Ejecución", state: "progress" },
        Energy: { label: "Descubrimiento", state: "info" },
        Industrials: { label: "En pausa", state: "danger" },
        Infra: { label: "Planificación", state: "info" },
        TMT: { label: "Sin impacto", state: "neutral" }
      }
    },
    {
      name: "InfraConnect",
      sectors: {
        Consumer: { label: "Prospección", state: "info" },
        Energy: { label: "En curso", state: "progress" },
        Industrials: { label: "Prospección", state: "info" },
        Infra: { label: "Ejecución", state: "progress" },
        TMT: { label: "En riesgo", state: "warning" }
      }
    },
    {
      name: "Industrial Edge",
      sectors: {
        Consumer: { label: "Cierre", state: "success" },
        Energy: { label: "Negociación", state: "progress" },
        Industrials: { label: "Ejecución", state: "progress" },
        Infra: { label: "Prospección", state: "info" },
        TMT: { label: "En curso", state: "progress" }
      }
    }
  ]
};

const millionFormatter = (value, fractionDigits = 0) =>
  `${value.toLocaleString('es-ES', {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits
  })} M€`;

const formatPercentage = (value) => `${value > 0 ? '+' : ''}${value.toFixed(1)}%`;

const createBadge = (value) => {
  const className = value > 0 ? 'positive' : value < 0 ? 'negative' : 'neutral';
  return `<span class="badge ${className}">${formatPercentage(value)}</span>`;
};

const renderKpis = () => {
  const container = document.getElementById('kpi-grid');
  const cards = dashboardData.kpis
    .map(
      ({ name, revenue, yoy, budget }) => `
        <article class="kpi-card">
          <h3>${name}</h3>
          <p class="kpi-value">${millionFormatter(revenue)}</p>
          <div class="metric-row">
            <span class="${yoy >= 0 ? 'positive' : 'negative'}">YoY ${formatPercentage(yoy)}</span>
            <span>Budget ${budget}%</span>
          </div>
        </article>
      `
    )
    .join('');
  container.innerHTML = cards;
};

const renderPipelineSummary = () => {
  const container = document.getElementById('pipeline-summary');
  const { opportunities, yoy, revenue } = dashboardData.pipelineKpi;
  container.innerHTML = `
    <div class="summary-card">
      <h3>Oportunidades actuales</h3>
      <strong>${opportunities}</strong>
    </div>
    <div class="summary-card">
      <h3>YoY Oportunidades</h3>
      <strong class="${yoy >= 0 ? 'positive' : 'negative'}">${formatPercentage(yoy)}</strong>
    </div>
    <div class="summary-card">
      <h3>Ingresos generados</h3>
      <strong>${millionFormatter(revenue)}</strong>
    </div>
  `;
};

const regionKeys = ["Europa", "América", "Asia Pacífico", "Oriente Medio"];
const productKeys = ["GM", "IBF", "GTB"];

const renderSectorMatrix = () => {
  const tbody = document.querySelector('#sector-matrix-table tbody');
  const totalRow = document.getElementById('sector-matrix-total');

  let totalRevenue = 0;
  let weightedYoY = 0;
  let weightedMoM = 0;
  let totalClients = 0;
  let weightedClientGrowth = 0;
  let totalNewClients = 0;
  let totalUptiers = 0;
  let totalManagingDirectors = 0;

  const regionTotals = Object.fromEntries(regionKeys.map((key) => [key, 0]));
  const productTotals = Object.fromEntries(productKeys.map((key) => [key, 0]));

  const rows = dashboardData.sectors
    .map((sector) => {
      const { name, revenue, yoyYear, yoyMonth, clients, managingDirectors, regions, products } = sector;

      totalRevenue += revenue;
      weightedYoY += revenue * yoyYear;
      weightedMoM += revenue * yoyMonth;
      totalClients += clients.total;
      weightedClientGrowth += clients.total * clients.growth;
      totalNewClients += clients.new;
      totalUptiers += clients.uptier;
      totalManagingDirectors += managingDirectors;

      const regionCells = regionKeys
        .map((region) => {
          const value = regions[region] || 0;
          regionTotals[region] += value;
          return `<td class="numeric">${millionFormatter(value)}</td>`;
        })
        .join('');

      const productCells = productKeys
        .map((product) => {
          const value = products[product] || 0;
          productTotals[product] += value;
          return `<td class="numeric">${millionFormatter(value)}</td>`;
        })
        .join('');

      const regionTotal = regionKeys.reduce((sum, key) => sum + (regions[key] || 0), 0);
      const productTotal = productKeys.reduce((sum, key) => sum + (products[key] || 0), 0);
      const revenuePerClient = revenue / clients.total;
      const revenuePerMd = revenue / managingDirectors;

      return `
        <tr>
          <th scope="row">${name}</th>
          <td class="numeric">${millionFormatter(revenue)}</td>
          <td>${createBadge(yoyYear)}</td>
          <td>${createBadge(yoyMonth)}</td>
          ${regionCells}
          <td class="numeric">${millionFormatter(regionTotal)}</td>
          ${productCells}
          <td class="numeric">${millionFormatter(productTotal)}</td>
          <td class="numeric">${clients.total}</td>
          <td class="numeric">${clients.new}</td>
          <td class="numeric">${clients.uptier}</td>
          <td>${createBadge(clients.growth)}</td>
          <td class="numeric">${millionFormatter(revenuePerClient, 1)}</td>
          <td class="numeric">${managingDirectors}</td>
          <td class="numeric">${millionFormatter(revenuePerMd, 1)}</td>
        </tr>
      `;
    })
    .join('');

  tbody.innerHTML = rows;

  const yoyAverage = totalRevenue ? weightedYoY / totalRevenue : 0;
  const momAverage = totalRevenue ? weightedMoM / totalRevenue : 0;
  const clientGrowthAverage = totalClients ? weightedClientGrowth / totalClients : 0;
  const totalRegionSum = regionKeys.reduce((sum, key) => sum + regionTotals[key], 0);
  const totalProductSum = productKeys.reduce((sum, key) => sum + productTotals[key], 0);
  const revenuePerClientTotal = totalClients ? totalRevenue / totalClients : 0;
  const revenuePerMdTotal = totalManagingDirectors ? totalRevenue / totalManagingDirectors : 0;

  const regionTotalsMarkup = regionKeys
    .map((region) => `<td class="numeric">${millionFormatter(regionTotals[region])}</td>`)
    .join('');

  const productTotalsMarkup = productKeys
    .map((product) => `<td class="numeric">${millionFormatter(productTotals[product])}</td>`)
    .join('');

  totalRow.innerHTML = `
    <th scope="row">Total</th>
    <td class="numeric">${millionFormatter(totalRevenue)}</td>
    <td>${createBadge(yoyAverage)}</td>
    <td>${createBadge(momAverage)}</td>
    ${regionTotalsMarkup}
    <td class="numeric">${millionFormatter(totalRegionSum)}</td>
    ${productTotalsMarkup}
    <td class="numeric">${millionFormatter(totalProductSum)}</td>
    <td class="numeric">${totalClients}</td>
    <td class="numeric">${totalNewClients}</td>
    <td class="numeric">${totalUptiers}</td>
    <td>${createBadge(clientGrowthAverage)}</td>
    <td class="numeric">${millionFormatter(revenuePerClientTotal, 1)}</td>
    <td class="numeric">${totalManagingDirectors}</td>
    <td class="numeric">${millionFormatter(revenuePerMdTotal, 1)}</td>
  `;
};

const renderPipelineDetail = () => {
  const tbody = document.querySelector('#pipeline-detail-table tbody');
  tbody.innerHTML = dashboardData.sectors
    .map(({ name, pipeline }) => {
      const totalOpportunities = pipeline.open + pipeline.closed;
      return `
        <tr>
          <td>${name}</td>
          <td>${pipeline.open}</td>
          <td>${pipeline.closed}</td>
          <td>${totalOpportunities}</td>
          <td>${createBadge(pipeline.yoy)}</td>
          <td>${createBadge(pipeline.mom)}</td>
          <td>${millionFormatter(pipeline.revenue)}</td>
        </tr>
      `;
    })
    .join('');
};

const sectorOrder = ["Consumer", "Energy", "Industrials", "Infra", "TMT"];

const renderProjectStatus = () => {
  const tbody = document.querySelector('#project-status-table tbody');
  tbody.innerHTML = dashboardData.projects
    .map(({ name, sectors }) => {
      const cells = sectorOrder
        .map((sector) => {
          const status = sectors[sector];
          if (!status) {
            return '<td class="status-cell neutral">-</td>';
          }
          return `
            <td class="status-cell ${status.state}">
              <span>${status.label}</span>
            </td>
          `;
        })
        .join('');

      return `<tr><td>${name}</td>${cells}</tr>`;
    })
    .join('');
};

const initDashboard = () => {
  renderKpis();
  renderPipelineSummary();
  renderSectorMatrix();
  renderPipelineDetail();
  renderProjectStatus();
};

document.addEventListener('DOMContentLoaded', initDashboard);
