import * as React from 'react';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LockIcon from '@mui/icons-material/Lock';
import './Accordions.scss';

const accordionData = [
  { title: 'Личные качества', locked: false },
  { title: 'Кем работать для Души', locked: true },
  { title: 'Карма и задача 40 лет', locked: true },
  { title: 'Точка душевного комфорта', locked: false },
  { title: 'Самореализация', locked: false },
  { title: 'Задачи, которые тянутся из прошлых жизней', locked: true },
  { title: 'Точка личной силы', locked: true },
  { title: 'Сила рода', locked: true },
];

const Accordions = () => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
    console.log(`Аккордеон ${panel} открыт:`, isExpanded);
  };

  return (
    <div className="accordion-container">
      {accordionData.map((item, index) => (
        <Accordion 
          key={index} 
          expanded={expanded === index} 
          onChange={handleChange(index)}
          className={item.locked ? 'locked' : ''}
        >
          <AccordionSummary expandIcon={item.locked ? <LockIcon /> : <ExpandMoreIcon />}>
            <Typography component="span" className="accordion-title">
              {item.title}
            </Typography>
            {item.locked && (
              <a 
                href="#" 
                className={`unlock-link ${expanded === index ? 'active' : ''}`}
              >
                Разблокировать
              </a>
            )}
          </AccordionSummary>
          {!item.locked && (
            <AccordionDetails>
              <Typography>Содержимое раздела</Typography>
            </AccordionDetails>
          )}
        </Accordion>
      ))}
    </div>
  );
};

export default Accordions;
