import * as React from 'react';
import { ScatterChart } from '@mui/x-charts/ScatterChart';

const data = [
  {
    id: 'data-0',
    x1: 329.3901933508897,
    x2: 391.29186095993606,
    y1: 443.2884161399204,
    y2: 153.90571309895228,
  },
  {
    id: 'data-1',
    x1: 96.94442842094364,
    x2: 139.634443461646,
    y1: 110.56979332372185,
    y2: 217.81909847727542,
  },
  {
    id: 'data-2',
    x1: 336.35103590449535,
    x2: 282.3442414489907,
    y1: 175.23463931966842,
    y2: 286.32523763955334,
  },
  {
    id: 'data-3',
    x1: 159.4496729106999,
    x2: 384.8522319907488,
    y1: 195.97279676142676,
    y2: 325.12945103632984,
  },
  {
    id: 'data-4',
    x1: 188.86414975302145,
    x2: 182.27968262199212,
    y1: 351.77824133765336,
    y2: 144.58439575631098,
  },
  {
    id: 'data-5',
    x1: 143.86044249373288,
    x2: 360.22780736778725,
    y1: 43.25389300624882,
    y2: 146.5173897582741,
  },
  {
    id: 'data-6',
    x1: 202.02942060247486,
    x2: 209.50938928667662,
    y1: 376.3400196576874,
    y2: 309.69257407844253,
  },
  {
    id: 'data-7',
    x1: 384.41882164352836,
    x2: 258.93031778117836,
    y1: 31.514901757475954,
    y2: 236.38933471416334,
  },
  {
    id: 'data-8',
    x1: 256.76780435387104,
    x2: 70.57105711877887,
    y1: 231.31554229654373,
    y2: 440.7212557061948,
  },
  {
    id: 'data-9',
    x1: 143.79589966039185,
    x2: 419.0284308743705,
    y1: 108.04233892522197,
    y2: 20.29042963865846,
  },
  {
    id: 'data-10',
    x1: 103.48391760733489,
    x2: 15.886736737261153,
    y1: 321.7780944192481,
    y2: 484.1717097509519,
  },
  {
    id: 'data-11',
    x1: 272.3980453617244,
    x2: 189.03130953010572,
    y1: 120.18012027623782,
    y2: 54.96217342866216,
  },
  {
    id: 'data-12',
    x1: 23.57704512396319,
    x2: 456.4569577369013,
    y1: 366.23074816098,
    y2: 418.5287664872115,
  },
  {
    id: 'data-13',
    x1: 219.73640408624584,
    x2: 235.96125050207183,
    y1: 451.45898671310067,
    y2: 181.32619635144266,
  },
  {
    id: 'data-14',
    x1: 54.99867532852309,
    x2: 434.57148189011554,
    y1: 294.80137404674065,
    y2: 440.94036000283,
  },
  {
    id: 'data-15',
    x1: 134.1364503890937,
    x2: 383.80482092647594,
    y1: 121.83164020774473,
    y2: 273.5287823972362,
  },
  {
    id: 'data-16',
    x1: 12.703938041473961,
    x2: 270.81750948158214,
    y1: 287.78392808599597,
    y2: 346.75327885754825,
  },
  {
    id: 'data-17',
    x1: 176.51888558015415,
    x2: 119.1739940378579,
    y1: 134.06468270194205,
    y2: 74.52817995436179,
  },
  {
    id: 'data-18',
    x1: 65.05049852678435,
    x2: 78.93152140556425,
    y1: 104.59507924179768,
    y2: 150.92970818152364,
  },
  {
    id: 'data-19',
    x1: 162.2560126350584,
    x2: 63.70706828207662,
    y1: 413.0778687429264,
    y2: 26.483118169888797,
  },
  {
    id: 'data-20',
    x1: 68.88347810774398,
    x2: 150.82772913125686,
    y1: 74.68898786503964,
    y2: 333.2838270879973,
  },
  {
    id: 'data-21',
    x1: 95.2992281698003,
    x2: 329.1800140624717,
    y1: 360.62354615085223,
    y2: 422.0189918371259,
  },
  {
    id: 'data-22',
    x1: 390.6262313697685,
    x2: 10.010605025750907,
    y1: 330.7221169709291,
    y2: 488.0679448980641,
  },
];

export default function BasicScatterChart() {
  return (
    <ScatterChart
      width={600}
      height={400}
      series={[
        {
          type: 'scatter',
          id: 's1',
          markerSize: 5,
          data: data.map(({ x1, y1, id }) => ({ x: x1, y: y1, id })),
        },
        {
          id: 's2',
          type: 'scatter',
          data: data.map(({ x1, y2, id }) => ({ x: x1, y: y2, id })),
        },
      ]}
    />
  );
}
