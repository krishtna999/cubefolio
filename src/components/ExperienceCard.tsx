import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Experience } from '@/data/experiences';

interface ExperienceCardProps {
  experience: Experience;
  currentIndex: number;
  totalCount: number;
}

export function ExperienceCard({
  experience,
  currentIndex,
  totalCount
}: ExperienceCardProps) {
  const accentColor = experience.color !== '#ffffff' ? experience.color : 'var(--primary)';

  return (
    <motion.div
      key={experience.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full max-w-3xl mx-auto"
    >
      <div className="space-y-6">

        {/* Header Section */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Badge
              variant="outline"
              className="font-mono text-[10px] uppercase tracking-wider bg-background/20 backdrop-blur-sm"
              style={{ borderColor: accentColor, color: accentColor }}
              data-testid={`badge-period-${experience.id}`}
            >
              {experience.period}
            </Badge>
            <span className="text-[10px] text-muted-foreground font-mono">
              0{currentIndex + 1} / 0{totalCount}
            </span>
          </div>

          <h2
            className="text-3xl md:text-4xl font-display font-bold mb-1 tracking-tight"
            style={{ color: accentColor }}
            data-testid={`title-${experience.id}`}
          >
            {experience.title}
          </h2>

          <div className="text-lg md:text-xl text-foreground/90 font-medium">
            {experience.customSubtitle ? (
              experience.customSubtitle
            ) : (
              <>
                {experience.role} <span className="text-muted-foreground">at</span> {experience.company}
              </>
            )}
          </div>
        </div>

        {/* Overview */}
        <section>
          <p className="text-base text-muted-foreground leading-relaxed" data-testid={`description-${experience.id}`}>
            {experience.detailedDescription || experience.description}
          </p>
        </section>

        {/* Accomplishments */}
        <section>
          <div className="space-y-4">
            {Object.entries(experience.keyAccomplishments).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
                  {category}
                </h3>
                <ul className="grid gap-2">
                  {items.map((acc, idx) => (
                    <li key={idx} className="flex gap-3 group">
                      <span
                        className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 transition-colors duration-300"
                        style={{ backgroundColor: accentColor }}
                      />
                      <span className="text-sm text-foreground/80 leading-relaxed group-hover:text-foreground transition-colors">
                        {acc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        {experience.tech && (
          <section>
            <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {experience.tech.map((t) => (
                <Badge
                  key={t}
                  variant="secondary"
                  className="px-2.5 py-0.5 text-xs bg-background/30 hover:bg-background/50 transition-colors"
                  data-testid={`tech-${experience.id}-${t.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {t}
                </Badge>
              ))}
            </div>
          </section>
        )}
      </div>
    </motion.div>
  );
}
