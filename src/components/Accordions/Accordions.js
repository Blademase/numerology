import * as React from 'react';
import { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LockIcon from '@mui/icons-material/Lock';
import './Accordions.scss';

const Accordions = ({ data, defaultAccordionData }) => {
  const [expanded, setExpanded] = useState(null);
  const [accordionData, setAccordionData] = useState(defaultAccordionData);

  useEffect(() => {
    if (Object?.keys(data)?.length > 0) {
      setAccordionData(
        defaultAccordionData?.map((item) => ({
          ...item,
          ...(data[item.key] || {}),
          is_paid: data[item.key] ? data[item.key].is_paid : true
        }))
      );
    }
  }, [data]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

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

  const renderNestedTalents = (content) => {
    return Object.keys(content)
      .filter((key) => typeof content[key] === 'object' && content[key] !== null)
      .map((key, index) => renderTalent(content[key], key.replace(/_/g, ' ')));
  };

  return (
    <div className="accordion-container">
      {accordionData?.map((content, index) => (
        <Accordion 
          key={index} 
          expanded={expanded === index} 
          onChange={handleChange(index)}
          className={content.is_paid ? 'locked' : ''}
        >
          <AccordionSummary expandIcon={content.is_paid ? <LockIcon /> : <ExpandMoreIcon />}>
            <Typography component="span" className="accordion-title">
              {content.title}
            </Typography>
            {content.is_paid && (
              <a href="#" className={`unlock-link ${expanded === index ? 'active' : ''}`}>
                Разблокировать
              </a>
            )}
          </AccordionSummary>

          {!content.is_paid && (
            <AccordionDetails>
              <Typography variant="body1" dangerouslySetInnerHTML={{ __html: content?.description ?? 'Нет описания' }} />
              {renderNestedTalents(content)}
            </AccordionDetails>
          )}
        </Accordion>
      ))}
    </div>
  );
};

export default Accordions;
