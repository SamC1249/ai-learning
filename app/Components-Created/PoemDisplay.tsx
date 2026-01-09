import React from 'react';
import { motion } from 'framer-motion';

const PoemDisplay: React.FC = () => {
  const poemLines = [
    "Hold fast to dreams",
    "For if dreams die",
    "Life is a broken-winged bird",
    "That cannot fly.",
    "",
    "Hold fast to dreams",
    "For when dreams go",
    "Life is a barren field",
    "Frozen with snow."
  ];

  return (
    <div className="flex items-center gap-8">
      {/* Image on the LEFT (not centered) - LARGER */}
      <div className="flex-shrink-0">
        <img
          src="/images/speech.svg"
          alt="Speech"
          className="w-48 h-48 md:w-56 md:h-56 opacity-30"
        />
      </div>

      {/* Poem text on the RIGHT */}
      <div className="flex-1">
        <div className="space-y-1">
          {poemLines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: index * 0.15,
                ease: 'easeOut'
              }}
              className={`text-white ${line === '' ? 'h-4' : ''}`}
              style={{
                fontFamily: "'Playfair Display', 'Georgia', serif",
                fontStyle: 'italic',
                fontSize: '1rem',
                lineHeight: '1.8',
                letterSpacing: '0.02em'
              }}
            >
              {line}
            </motion.div>
          ))}

          {/* Author */}
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: poemLines.length * 0.15,
              ease: 'easeOut'
            }}
            className="text-zinc-500 text-sm mt-4"
            style={{
              fontFamily: "'Playfair Display', 'Georgia', serif",
              fontStyle: 'italic'
            }}
          >
            — Langston Hughes
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PoemDisplay;
