import React from 'react';
import Plot from 'react-plotly.js';

const AudienceBarChart = () => {
  return (
    <div className="w-full bg-white rounded-xl p-4 ">
      <h2 className="text-base font-medium text-[#1D1D1F] mb-4">Audience Reach & Impressions</h2>
      <Plot
        data={[
          {
            x: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            y: [30000, 60000, 70000, 70000],
            type: 'bar',
            marker: {
              color: '#2D8CFF',
              line: { width: 0 },
            },
            text: ['30K', '60K', '70K', '70K'],
            textposition: 'outside',
            hoverinfo: 'y',
          },
        ]}
        layout={{
          autosize: true,
          height: 300,
          margin: { t: 20, l: 40, r: 20, b: 40 },
          yaxis: {
            range: [0, 80000],
            tickformat: '~s',
            zeroline: true,
            showgrid: false,
           gridcolor: 'red',
            grid: 'horizontal',            
          },
          xaxis: {
            showline: false,
            zeroline: false,
            tickfont: { size: 12 },
          },
          bargap: 0.5,
          plot_bgcolor: '#fff',
          paper_bgcolor: '#fff',
          showlegend: false,
        }}
        config={{ displayModeBar: false, responsive: true }}
        style={{ width: '100%', height: '100%',  }}
      />
    </div>
  );
};

export default AudienceBarChart;

