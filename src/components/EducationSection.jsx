import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    degree: "Diploma in Graphic Design",
    institution: "Stanford University",
    location: "Stanford, CA",
    duration: "2019",
    description: "Focused on artificial intelligence and machine learning, conducting research in neural networks and computer vision.",
  },
  {
    degree: "BA LLB",
    // institution: "MIT",
    // location: "Cambridge, MA",
    duration: "2018",
    // description: "Major in Computer Science with minor in Mathematics. Specialized in software engineering and systems design.",
  },
  {
    degree: "Excellence in Nutrition & Analysis ",
    // institution: "MIT",
    // location: "Cambridge, MA",
    duration: "2019",
    // description: "Major in Computer Science with minor in Mathematics. Specialized in software engineering and systems design.",
  },
  {
    degree: "Diploma in Contract Management ",
    // institution: "MIT",
    // location: "Cambridge, MA",
    duration: "2020",
    // description: "Major in Computer Science with minor in Mathematics. Specialized in software engineering and systems design.",
  },
  {
    degree: "Diploma in Computer Applications",
    // institution: "MIT",
    // location: "Cambridge, MA",
    duration: "2021",
    // description: "Major in Computer Science with minor in Mathematics. Specialized in software engineering and systems design.",
  },
  {
    degree: "MBA in Business Finance & Analytics",
    // institution: "MIT",
    // location: "Cambridge, MA",
    duration: "2021",
    // description: "Major in Computer Science with minor in Mathematics. Specialized in software engineering and systems design.",
  },
  

];

const EducationSection = () => {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-16"
      >
        <div className="flex items-center justify-center space-x-3 mb-2">
          <GraduationCap className="w-5 h-5 text-neutral-400" />
          <span className="text-2xl uppercase tracking-[0.2em] text-blue-400">Education</span>
        </div>
      </motion.div>

      <div className="space-y-16">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              delay: index * 0.2 
            }}
          >
            <motion.div 
              className="group relative"
              whileHover="hover"
            >
              {/* Elegant line decoration */}
              <motion.div 
                className="absolute -left-4 top-0 w-[1px] h-full bg-neutral-200 origin-top"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />

              <div className="relative pl-8">
                {/* Time period */}
                <motion.div
                  className="text-xl text-neutral-400 mb-2 tracking-wide"
                  variants={{
                    hover: { x: 8 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {edu.duration}
                </motion.div>

                {/* Institution */}
                {/* <motion.h3 
                  className="text-xl font-light mb-1 text-neutral-800"
                  variants={{
                    hover: { x: 8 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {edu.institution}
                </motion.h3> */}

                {/* Location */}
                {/* <motion.div 
                  className="text-sm text-neutral-500 mb-3"
                  variants={{
                    hover: { x: 8 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {edu.location}
                </motion.div> */}

                {/* Degree */}
                <motion.h4 
                  className="font-semi-bold text-xl  text-neutral-600 mb-4"
                  variants={{
                    hover: { x: 8 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {edu.degree}
                </motion.h4>

                {/* Description */}
                {/* <motion.p 
                  className="text-neutral-500 leading-relaxed font-light"
                  variants={{
                    hover: { x: 8 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {edu.description}
                </motion.p> */}

                {/* Elegant hover line */}
                <motion.div 
                  className="absolute left-0 top-0 w-[1px] h-full bg-neutral-800 origin-top"
                  initial={{ scaleY: 0 }}
                  variants={{
                    hover: { scaleY: 1 }
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;

