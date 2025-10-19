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

const renderSectorOverview = () => {
  const tbody = document.querySelector('#sector-overview-table tbody');
  tbody.innerHTML = dashboardData.sectors
    .map(({ name, revenue, yoyYear, yoyMonth, clients, managingDirectors }) => {
      const revenuePerClient = revenue / clients.total;
      const revenuePerMd = revenue / managingDirectors;
      return `
        <tr>
          <td>${name}</td>
          <td>${millionFormatter(revenue)}</td>
          <td>${createBadge(yoyYear)}</td>
          <td>${createBadge(yoyMonth)}</td>
          <td>${clients.total}</td>
          <td>${clients.new}</td>
          <td>${clients.uptier}</td>
          <td>${millionFormatter(revenuePerClient, 1)}</td>
          <td>${managingDirectors}</td>
          <td>${millionFormatter(revenuePerMd, 1)}</td>
        </tr>
      `;
    })
    .join('');
};

const renderMatrixTable = (selector, extractor, summaryRowId) => {
  const tbody = document.querySelector(`${selector} tbody`);
  const summaryRow = summaryRowId ? document.getElementById(summaryRowId) : null;
  const totals = {};

  const rows = dashboardData.sectors
    .map((sector) => {
      const values = extractor(sector);
      const total = Object.values(values).reduce((sum, value) => sum + value, 0);
      const cells = Object.entries(values)
        .map(([key, value]) => {
          totals[key] = (totals[key] || 0) + value;
          return `<td>${millionFormatter(value)}</td>`;
        })
        .join('');

      return `
        <tr>
          <td>${sector.name}</td>
          ${cells}
          <td>${millionFormatter(total)}</td>
        </tr>
      `;
    })
    .join('');

  tbody.innerHTML = rows;

  if (summaryRow) {
    const summaryCells = Object.keys(extractor(dashboardData.sectors[0]))
      .map((key) => `<td>${millionFormatter(totals[key] || 0)}</td>`)
      .join('');
    summaryRow.innerHTML = `<td>Total</td>${summaryCells}<td>${millionFormatter(
      Object.values(totals).reduce((sum, value) => sum + value, 0)
    )}</td>`;
  }
};

const renderClientBreakdown = () => {
  const tbody = document.querySelector('#sector-client-table tbody');
  const summaryRow = document.getElementById('client-summary-row');
  const totals = { total: 0, new: 0, uptier: 0 };

  tbody.innerHTML = dashboardData.sectors
    .map(({ name, clients }) => {
      totals.total += clients.total;
      totals.new += clients.new;
      totals.uptier += clients.uptier;
      return `
        <tr>
          <td>${name}</td>
          <td>${clients.total}</td>
          <td>${clients.new}</td>
          <td>${clients.uptier}</td>
          <td>${createBadge(clients.growth)}</td>
        </tr>
      `;
    })
    .join('');

  summaryRow.innerHTML = `
    <td>Total</td>
    <td>${totals.total}</td>
    <td>${totals.new}</td>
    <td>${totals.uptier}</td>
    <td>-</td>
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
  renderSectorOverview();
  renderMatrixTable('#sector-region-table', (sector) => sector.regions, 'region-summary-row');
  renderMatrixTable('#sector-product-table', (sector) => sector.products, 'product-summary-row');
  renderClientBreakdown();
  renderPipelineDetail();
  renderProjectStatus();
};

document.addEventListener('DOMContentLoaded', initDashboard);
