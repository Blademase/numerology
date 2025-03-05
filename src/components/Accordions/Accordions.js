import * as React from 'react';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LockIcon from '@mui/icons-material/Lock';
import './Accordions.scss';

// Универсальный компонент для рендеринга аккордеонов
const Accordions = ({ data, config = [] }) => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  // Универсальный рендеринг талантов
  const renderTalent = (talent, label) => {
    if (!talent) return null;
    return (
      <div className="talent-block">
        <Typography variant="h6">{label}</Typography>
        <Typography variant="subtitle1">{talent.title}</Typography>
        <Typography variant="body2">{talent.description}</Typography>
      </div>
    );
  };

  return (
    <div className="accordion-container">
      {config.map((item, index) => {
        const content = data[item.key] || {};
        const isLocked = item.locked || content?.is_paid;

        return (
          <Accordion 
            key={index} 
            expanded={expanded === index} 
            onChange={handleChange(index)}
            className={isLocked ? 'locked' : ''}
          >
            <AccordionSummary expandIcon={isLocked ? <LockIcon /> : <ExpandMoreIcon />}>
              <Typography component="span" className="accordion-title">
                {item.title}
              </Typography>
              {isLocked && (
                <a 
                  href="#" 
                  className={`unlock-link ${expanded === index ? 'active' : ''}`}
                >
                  Разблокировать
                </a>
              )}
            </AccordionSummary>

            {!isLocked && (
              <AccordionDetails>
                <Typography variant="h6">{content?.title ?? "Без названия"}</Typography>
                <Typography 
                  variant="body1" 
                  dangerouslySetInnerHTML={{ __html: content?.description ?? "Нет описания" }} 
                />

                {renderTalent(content?.birth_talent, "Талант при рождении")}
                {renderTalent(content?.mature_talent, "Талант зрелости")}
                {renderTalent(content?.youth_talent, "Талант молодости")}
                {renderTalent(content?.innate_talent, "Врожденный талант")}
                {renderTalent(content?.order1, "Первый порядок")}
                {renderTalent(content?.order2, "Второй порядок")}
                {renderTalent(content?.order3, "Третий порядок")}
              </AccordionDetails>
            )}
          </Accordion>
        );
      })}
    </div>
  );
};

export default Accordions;
