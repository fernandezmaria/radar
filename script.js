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
      revenue: { value: 402, yoy: 7.2, budget: 93 },
      regions: {
        us: { value: 110, yoy: 6.8, budget: 94 },
        mexico: { value: 42, yoy: 5.1, budget: 92 },
        spain: { value: 98, yoy: 7.4, budget: 95 },
        europe: { value: 72, yoy: 6.2, budget: 91 },
        ads: { value: 44, yoy: 4.9, budget: 93 },
        asia: { value: 36, yoy: 5.5, budget: 90 }
      },
      products: {
        gtb: { value: 134, yoy: 5.6, budget: 94 },
        ibf: { value: 138, yoy: 6.3, budget: 95 },
        gm: { value: 130, yoy: 7.2, budget: 92 }
      },
      clients: {
        total: { value: 184, yoy: 6.5, budget: 94 },
        new: { value: 18, yoy: 9.1, budget: 90 },
        uptiers: { value: 130, yoy: 4.8, budget: 92 }
      },
      pipeline: { open: 28, closed: 14, yoy: 7.5, mom: 1.9, revenue: 38 }
    },
    {
      name: "Energy",
      revenue: { value: 340, yoy: 8.4, budget: 91 },
      regions: {
        us: { value: 98, yoy: 7.8, budget: 90 },
        mexico: { value: 34, yoy: 5.6, budget: 92 },
        spain: { value: 76, yoy: 8.1, budget: 93 },
        europe: { value: 58, yoy: 6.9, budget: 89 },
        ads: { value: 42, yoy: 7.3, budget: 90 },
        asia: { value: 32, yoy: 5.8, budget: 88 }
      },
      products: {
        gtb: { value: 116, yoy: 6.8, budget: 91 },
        ibf: { value: 118, yoy: 8.2, budget: 92 },
        gm: { value: 106, yoy: 7.5, budget: 90 }
      },
      clients: {
        total: { value: 162, yoy: 5.7, budget: 93 },
        new: { value: 16, yoy: 8.6, budget: 88 },
        uptiers: { value: 112, yoy: 4.9, budget: 91 }
      },
      pipeline: { open: 24, closed: 11, yoy: 6.4, mom: 1.6, revenue: 35 }
    },
    {
      name: "Industrials",
      revenue: { value: 263, yoy: 5.9, budget: 95 },
      regions: {
        us: { value: 76, yoy: 4.8, budget: 96 },
        mexico: { value: 24, yoy: 3.6, budget: 94 },
        spain: { value: 58, yoy: 5.7, budget: 97 },
        europe: { value: 46, yoy: 5.2, budget: 95 },
        ads: { value: 30, yoy: 4.1, budget: 93 },
        asia: { value: 29, yoy: 4.5, budget: 92 }
      },
      products: {
        gtb: { value: 88, yoy: 4.9, budget: 96 },
        ibf: { value: 92, yoy: 5.6, budget: 95 },
        gm: { value: 83, yoy: 5.8, budget: 94 }
      },
      clients: {
        total: { value: 143, yoy: 3.9, budget: 95 },
        new: { value: 14, yoy: 6.2, budget: 92 },
        uptiers: { value: 100, yoy: 3.4, budget: 94 }
      },
      pipeline: { open: 32, closed: 16, yoy: 4.8, mom: 1.1, revenue: 42 }
    },
    {
      name: "Infra",
      revenue: { value: 273, yoy: 6.7, budget: 97 },
      regions: {
        us: { value: 84, yoy: 6.1, budget: 98 },
        mexico: { value: 32, yoy: 4.5, budget: 95 },
        spain: { value: 61, yoy: 6.8, budget: 97 },
        europe: { value: 46, yoy: 6.2, budget: 96 },
        ads: { value: 27, yoy: 5.3, budget: 95 },
        asia: { value: 23, yoy: 5.7, budget: 94 }
      },
      products: {
        gtb: { value: 94, yoy: 5.9, budget: 97 },
        ibf: { value: 96, yoy: 6.4, budget: 96 },
        gm: { value: 83, yoy: 6.1, budget: 95 }
      },
      clients: {
        total: { value: 158, yoy: 6.8, budget: 96 },
        new: { value: 17, yoy: 9.4, budget: 91 },
        uptiers: { value: 108, yoy: 5.7, budget: 95 }
      },
      pipeline: { open: 21, closed: 9, yoy: 5.7, mom: 1.8, revenue: 28 }
    },
    {
      name: "TMT",
      revenue: { value: 202, yoy: 10.8, budget: 104 },
      regions: {
        us: { value: 52, yoy: 9.5, budget: 103 },
        mexico: { value: 18, yoy: 7.2, budget: 101 },
        spain: { value: 56, yoy: 10.2, budget: 105 },
        europe: { value: 38, yoy: 9.6, budget: 104 },
        ads: { value: 19, yoy: 8.7, budget: 102 },
        asia: { value: 19, yoy: 8.9, budget: 101 }
      },
      products: {
        gtb: { value: 64, yoy: 9.1, budget: 104 },
        ibf: { value: 68, yoy: 10.6, budget: 105 },
        gm: { value: 70, yoy: 11.3, budget: 103 }
      },
      clients: {
        total: { value: 162, yoy: 7.5, budget: 98 },
        new: { value: 17, yoy: 11.2, budget: 94 },
        uptiers: { value: 116, yoy: 6.8, budget: 97 }
      },
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

const formatNumber = (value, fractionDigits = 0) =>
  value.toLocaleString('es-ES', {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits
  });

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

const variationClass = (value) => (value > 0 ? 'positive' : value < 0 ? 'negative' : 'neutral');

const budgetClass = (value) => {
  if (value >= 100) return 'positive';
  if (value <= 90) return 'negative';
  return 'neutral';
};

const renderMetricCell = (metric, { fractionDigits = 0 } = {}) => {
  if (!metric) {
    return '<td class="metric-cell">-</td>';
  }

  const value = metric.value ?? 0;
  const yoy = metric.yoy ?? 0;
  const budget = metric.budget ?? 0;

  return `
    <td class="metric-cell">
      <span class="metric-value">${formatNumber(value, fractionDigits)}</span>
      <div class="metric-meta">
        <span class="trend ${variationClass(yoy)}">YoY ${formatPercentage(yoy)}</span>
        <span class="budget ${budgetClass(budget)}">vs Budget ${Math.round(budget)}%</span>
      </div>
    </td>
  `;
};

const createAccumulator = () => ({ value: 0, yoy: 0, budget: 0 });

const accumulateMetric = (accumulator, metric) => {
  if (!metric) return accumulator;
  const metricValue = metric.value ?? 0;
  const metricYoy = metric.yoy ?? 0;
  const metricBudget = metric.budget ?? 0;

  accumulator.value += metricValue;
  accumulator.yoy += metricValue * metricYoy;
  accumulator.budget += metricValue * metricBudget;

  return accumulator;
};

const finalizeAccumulator = (accumulator) => {
  if (!accumulator.value) {
    return { value: 0, yoy: 0, budget: 0 };
  }

  return {
    value: accumulator.value,
    yoy: accumulator.yoy / accumulator.value,
    budget: accumulator.budget / accumulator.value
  };
};

const regionConfig = [
  { key: 'us', label: 'US' },
  { key: 'mexico', label: 'Mexico' },
  { key: 'spain', label: 'Spain' },
  { key: 'europe', label: 'Europe' },
  { key: 'ads', label: 'ADS' },
  { key: 'asia', label: 'Asia' }
];

const productConfig = [
  { key: 'gtb', label: 'GTB' },
  { key: 'ibf', label: 'IBF' },
  { key: 'gm', label: 'GM' }
];

const clientConfig = [
  { key: 'total', label: 'Total' },
  { key: 'new', label: 'New' },
  { key: 'uptiers', label: 'Uptiers' }
];

const renderSectorMatrix = () => {
  const tbody = document.querySelector('#sector-matrix-table tbody');
  const totalRow = document.getElementById('sector-matrix-total');

  const totalRevenue = createAccumulator();
  const regionTotals = Object.fromEntries(regionConfig.map(({ key }) => [key, createAccumulator()]));
  const productTotals = Object.fromEntries(productConfig.map(({ key }) => [key, createAccumulator()]));
  const clientTotals = Object.fromEntries(clientConfig.map(({ key }) => [key, createAccumulator()]));

  const rows = dashboardData.sectors
    .map((sector) => {
      accumulateMetric(totalRevenue, sector.revenue);
      regionConfig.forEach(({ key }) => accumulateMetric(regionTotals[key], sector.regions[key]));
      productConfig.forEach(({ key }) => accumulateMetric(productTotals[key], sector.products[key]));
      clientConfig.forEach(({ key }) => accumulateMetric(clientTotals[key], sector.clients[key]));

      const regionCells = regionConfig.map(({ key }) => renderMetricCell(sector.regions[key])).join('');
      const productCells = productConfig.map(({ key }) => renderMetricCell(sector.products[key])).join('');
      const clientCells = clientConfig.map(({ key }) => renderMetricCell(sector.clients[key])).join('');

      return `
        <tr>
          <th scope="row">${sector.name}</th>
          ${renderMetricCell(sector.revenue)}
          ${regionCells}
          ${productCells}
          ${clientCells}
        </tr>
      `;
    })
    .join('');

  tbody.innerHTML = rows;

  const totalCells = [
    renderMetricCell(finalizeAccumulator(totalRevenue)),
    ...regionConfig.map(({ key }) => renderMetricCell(finalizeAccumulator(regionTotals[key]))),
    ...productConfig.map(({ key }) => renderMetricCell(finalizeAccumulator(productTotals[key]))),
    ...clientConfig.map(({ key }) => renderMetricCell(finalizeAccumulator(clientTotals[key])))
  ].join('');

  totalRow.innerHTML = `<th scope="row">Total</th>${totalCells}`;
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
