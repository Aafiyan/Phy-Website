const quizData = {
    "Acoustics,Ultrasonic and Dielectrics": [
        {
            question: "Which type of wave is sound?",
            options: ["Transverse", "Longitudinal", "Electromagnetic", "Stationary"],
            answer: "Longitudinal"
        },
        {
            question: "What is the unit of frequency in acoustics?",
            options: ["Decibel (dB)", "Hertz (Hz)", "Pascal (Pa)", "Meter (m)"],
            answer: "Hertz (Hz)"
        },
        {
            question: "The speed of sound is fastest in:",
            options: ["Air", "Water", "Steel", "Vacuum"],
            answer: "Steel"
        },
        {
            question: "Which of the following defines resonance?",
            options: ["Reflection of sound waves", "Natural frequency matching an external frequency", "Absorption of sound energy", "Decrease in amplitude of sound waves"],
            answer: "Natural frequency matching an external frequency"
        },
        {
            question: "What is the speed of sound in air at room temperature (approx. 20°C)?",
            options: ["331 m/s", "343 m/s", "300 m/s", "372 m/s"],
            answer: "343 m/s"
        },
        {
            question: "Which of the following is a property of sound waves?",
            options: ["Polarization", "Diffraction", "Ionization", "Reflection only"],
            answer: "Diffraction"
        },
        {
            question: "The phenomenon responsible for the change in pitch of a moving vehicle’s siren is:",
            options: ["Resonance", "Doppler effect", "Echo", "Refraction"],
            answer: "Doppler Effect"
        },
        {
            question: "What is reverberation?",
            options: ["The absorption of sound", "The amplification of sound waves", "Persistence of sound due to multiple reflections", "The Doppler effect of sound"],
            answer: "Persistence of sound due to multiple reflections"
        },
        {
            question: "Sound intensity is measured in:",
            options: ["Hertz", "Decibels", "Joules", "Newtons"],
            answer: "Decibels"
        },
        {
            question: "The product of frequency and wavelength of a sound wave is equal to:",
            options: ["Amplitude", "Speed of sound", "Intensity", "Time period"],
            answer: "Speed of sound"
        },
        {
          question: "What is the frequency range of ultrasonic waves?",
          options: ["Below 20 Hz", "20 Hz - 20 kHz", "Above 20 kHz", "10 GHz - 100 GHz"],
          answer:  "Above 20 kHz"
      },
      {
          question: "Which of the following is not an application of ultrasonics?",
          options: ["Sonography", "Radar", "Cleaning", "Drilling"],
          answer:  "Radar"
      },
      {
          question: "Which material is commonly used in the production of ultrasonic waves?",
          options: ["Quartz", "Iron", "Copper", "Plastic"],
          answer: "Quartz"
      },
      {
          question: "What is the principle behind ultrasonic cleaning?",
          options: ["Magnetic field", "Cavitation", "Resonance", "Thermal expansion"],
          answer:"Magnetic field"
      },
      {
          question: "Which device is used to generate ultrasonic waves?",
          options: ["Loudspeaker", "Microphone", "Piezoelectric transducer", "Amplifier"],
          answer: "Piezoelectric transducer"
      },
      {
          question: "Ultrasonic waves are used to detect cracks in materials. What is this process called?",
          options: ["Echolocation", "Ultrasonic welding", "Non-destructive testing", "Cavitation"],
          answer: "Non-destructive testing"
      },
      {
          question: "What is the use of ultrasonics in medical imaging?",
          options: ["Detecting tumors", "Measuring blood pressure", "Sonography", "Monitoring heartbeat"],
          answer: "Sonography"
      },
      {
          question: "Which property of ultrasonics allows it to be used in drilling?",
          options: ["High energy", "High frequency", "High amplitude", "Short wavelength"],
          answer: "High energy"
      },
      {
          question: "Who discovered the piezoelectric effect, which is essential for generating ultrasonics?",
          options: ["Newton", "Curie brothers", "Einstein", "Faraday"],
          answer: "Curie brothers"
      },
      {
          question: "Ultrasonic waves can travel through which of the following?",
          options: ["Vacuum", "Solids only", "Solids, liquids, and gases", "Liquids only"],
          answer: "Solids, liquids, and gases"
      },
      {
        question: "What is a dielectric?",
        options: ["A type of conductor", "A material that can store electrical energy", "A source of electric current", "A semiconductor material"],
        answer: "A material that can store electrical energy"
    },
    {
        question: "Which property defines a good dielectric?",
        options: ["High conductivity", "Low permittivity", "High resistivity", "High permittivity"],
        answer: "High permittivity"
    },
    {
        question: "The unit of permittivity in the SI system is:",
        options: ["Farad per meter (F/m)", "Ohm (Ω)", "Henry (H)", "Coulomb (C)"],
        answer: "Farad per meter (F/m)"
    },
    {
        question: "The dielectric constant is also known as:",
        options: ["Relative permittivity", "Electric potential", "Capacitance", "Impedance"],
        answer: "Relative permittivity"
    },
    {
        question: "Which material is commonly used as a dielectric in capacitors?",
        options: ["Copper", "Air", "Silicon", "Graphite"],
        answer: "Air"
    },
    {
        question: "What happens to capacitance when a dielectric is inserted between the plates of a capacitor?",
        options: ["Increases", "Decreases", "Remains the same", "Depends on the material"],
        answer: "Increases"
    },
    {
        question: "The polarization of a dielectric occurs due to:",
        options: ["Free electrons moving", "Alignment of dipoles", "Formation of ions", "Loss of energy"],
        answer: "Alignment of dipoles"
    },
    {
        question: "What is the primary role of dielectrics in capacitors?",
        options: ["Store charge", "Enhance current flow", "Generate heat", "Resist current flow"],
        answer: "Store charge"
    },
    {
        question: "What type of dielectric material is used in a high-frequency application?",
        options: ["Polar dielectrics", "Non-polar dielectrics", "Metallic dielectrics", "Semiconductors"],
        answer: "Non-polar dielectrics"
    },
    {
        question: "Dielectric breakdown occurs when:",
        options: ["Electric field exceeds a threshold", "Dielectric constant is too high", "Material heats up", "Permittivity decreases"],
        answer: "Electric field exceeds a threshold"
    }
    
    ],
    "Engineering Optics": [
        { question: "What is the unit of refractive index?", options: ["No unit", "Meter", "Hertz", "Second"], answer: "No unit" },
    { question: "Snell's law relates to:", options: ["Reflection", "Refraction", "Diffraction", "Interference"], answer: "Refraction" },
    { question: "What is the critical angle?", options: ["Angle of incidence for total internal reflection", "Angle of reflection", "90 degrees", "Angle of polarization"], answer: "Angle of incidence for total internal reflection" },
    { question: "What is the speed of light in a vacuum?", options: ["3 × 10^8 m/s", "1 × 10^6 m/s", "1 × 10^8 m/s", "2 × 10^8 m/s"], answer: "3 × 10^8 m/s" },
    { question: "Which lens converges light rays?", options: ["Convex lens", "Concave lens", "Cylindrical lens", "Planar lens"], answer: "Convex lens" },
    { question: "What is a prism used for?", options: ["Dispersion of light", "Focus light", "Absorb light", "Reflect light"], answer: "Dispersion of light" },
    { question: "The phenomenon of splitting white light into colors is called:", options: ["Reflection", "Refraction", "Dispersion", "Polarization"], answer: "Dispersion" },
    { question: "Which is the largest wavelength in visible light?", options: ["Red", "Blue", "Green", "Yellow"], answer: "Red" },
    { question: "Which optical instrument uses total internal reflection?", options: ["Periscope", "Microscope", "Telescope", "Fiber optic cable"], answer: "Fiber optic cable" },
    { question: "What is a monochromatic light source?", options: ["Light of a single wavelength", "Light of all wavelengths", "Light of high intensity", "Light of low intensity"], answer: "Light of a single wavelength" },

    { question: "What is the principle of a laser?", options: ["Population inversion and stimulated emission", "Diffraction", "Refraction", "Polarization"], answer: "Population inversion and stimulated emission" },
    { question: "What is interference?", options: ["Overlap of waves", "Splitting of waves", "Reflection of waves", "Divergence of waves"], answer: "Overlap of waves" },
    { question: "Which color of light has the highest frequency?", options: ["Violet", "Red", "Blue", "Green"], answer: "Violet" },
    { question: "What is Brewster's angle?", options: ["Angle of polarization", "Critical angle", "Reflection angle", "Refracted angle"], answer: "Angle of polarization" },
    { question: "The refractive index of glass is:", options: ["More than 1", "Less than 1", "Equal to 1", "Infinity"], answer: "More than 1" },
    { question: "What is a hologram?", options: ["3D image", "Flat image", "Light source", "Mirror"], answer: "3D image" },
    { question: "What is diffraction?", options: ["Bending of light around corners", "Splitting of light", "Absorption of light", "Scattering of light"], answer: "Bending of light around corners" },
    { question: "Which property of light proves its wave nature?", options: ["Interference", "Reflection", "Refraction", "Absorption"], answer: "Interference" },
    { question: "What is the purpose of a polarizer?", options: ["Block certain orientations of light", "Focus light", "Reflect light", "Split light"], answer: "Block certain orientations of light" },
    { question: "What does a concave lens do to light rays?", options: ["Diverges them", "Converges them", "Reflects them", "Absorbs them"], answer: "Diverges them" },
    { question: "What is a telescope used for?", options: ["Observing distant objects", "Focusing nearby objects", "Measuring light intensity", "Creating holograms"], answer: "Observing distant objects" },
    { question: "Which phenomenon explains the sky's blue color?", options: ["Scattering", "Dispersion", "Reflection", "Absorption"], answer: "Scattering" },
    { question: "What is the wavelength range of visible light?", options: ["400-700 nm", "700-1000 nm", "300-400 nm", "1000-1500 nm"], answer: "400-700 nm" },
    { question: "What is the main component of optical fiber?", options: ["Glass or plastic", "Metal", "Ceramic", "Carbon"], answer: "Glass or plastic" },
    { question: "What causes chromatic aberration?", options: ["Dispersion of light", "Reflection", "Refraction", "Absorption"], answer: "Dispersion of light" },
    { question: "Which optical instrument is used in surveying?", options: ["Theodolite", "Microscope", "Periscope", "Telescope"], answer: "Theodolite" },
    { question: "What is the focal length of a lens?", options: ["Distance from the lens to the focal point", "Thickness of the lens", "Radius of curvature", "Diameter of the lens"], answer: "Distance from the lens to the focal point" },
    { question: "What is an application of convex mirrors?", options: ["Rearview mirrors", "Focusing sunlight", "Magnifying glass", "Corrective lenses"], answer: "Rearview mirrors" },
    { question: "The main use of a grating is for:", options: ["Diffraction", "Reflection", "Absorption", "Polarization"], answer: "Diffraction" }

    ],

    "Combined Test 1": [
        
            { 
                question: "What property of nanomaterials makes them particularly effective in sensors?", 
                options: ["High optical transparency", "Large surface area-to-volume ratio", "High melting point", "Low thermal conductivity"], 
                answer: "Large surface area-to-volume ratio" 
            },
            { 
                question: "Which phenomenon explains the formation of Newton's rings?", 
                options: ["Diffraction", "Interference", "Scattering", "Polarization"], 
                answer: "Interference" 
            },
            { 
                question: "Heisenberg’s Uncertainty Principle states that:", 
                options: ["Position and momentum cannot both be precisely determined simultaneously", "Energy and time of a system cannot be measured at the same time", "Both of the above", "Neither of the above"], 
                answer: "Both of the above" 
            },
            { 
                question: "In dielectrics, the term 'polarizability' refers to:", 
                options: ["The ability to store energy in an electric field", "The measure of resistance to electric breakdown", "The degree to which a dielectric material can be polarized by an electric field", "The frequency of the applied electric field"], 
                answer: "The degree to which a dielectric material can be polarized by an electric field" 
            },
            { 
                question: "Superconductivity is characterized by:", 
                options: ["High magnetic permeability", "Zero electrical resistance below a critical temperature", "Low resistance to thermal energy", "High electrical resistance at low temperatures"], 
                answer: "Zero electrical resistance below a critical temperature" 
            },
            { 
                question: "What is the principle of a laser?", 
                options: ["Population inversion and stimulated emission", "Diffraction", "Refraction", "Polarization"], 
                answer: "Population inversion and stimulated emission" 
            },
            { 
                question: "What is interference?", 
                options: ["Overlap of waves", "Splitting of waves", "Reflection of waves", "Divergence of waves"], 
                answer: "Overlap of waves" 
            },
            { 
                question: "Which color of light has the highest frequency?", 
                options: ["Violet", "Red", "Blue", "Green"], 
                answer: "Violet" 
            },
            { 
                question: "The energy of a photon is directly proportional to:", 
                options: ["Its wavelength", "Its frequency", "The square of its amplitude", "The speed of light"], 
                answer: "Its frequency" 
            },
            { 
                question: "What is the significance of the reverberation time in acoustics?", 
                options: ["Measures the frequency of sound waves", "Determines the persistence of sound after the source stops", "Indicates the loudness of a sound source", "Helps calculate the velocity of sound in air"], 
                answer: "Determines the persistence of sound after the source stops" 
            },
            { 
                question: "Which material is commonly used for piezoelectric generation of ultrasonics?", 
                options: ["Quartz", "Copper", "Iron", "Plastic"], 
                answer: "Quartz" 
            },
            { 
                question: "What is Miller indices used for?", 
                options: ["Define the size of a crystal", "Describe the orientation of a crystal plane", "Calculate lattice constants", "Determine the type of crystal structure"], 
                answer: "Describe the orientation of a crystal plane" 
            },
            { 
                question: "What is the resolving power of an optical instrument dependent on?", 
                options: ["Wavelength of light", "Refractive index", "Aperture size", "All of the above"], 
                answer: "All of the above" 
            },
            { 
                question: "Which phenomenon is responsible for diffraction patterns?", 
                options: ["Wave bending around obstacles", "Wave overlap", "Wave reflection", "Wave refraction"], 
                answer: "Wave bending around obstacles" 
            },
            { 
                question: "In a Michelson interferometer, the formation of fringes is due to:", 
                options: ["Diffraction", "Polarization", "Interference", "Scattering"], 
                answer: "Interference" 
            },
            { 
                question: "The Schrödinger equation describes:", 
                options: ["Energy levels of electrons in an atom", "Wave nature of particles", "Trajectory of particles in a field", "Classical mechanics"], 
                answer: "Wave nature of particles" 
            },
            { 
                question: "The energy gap in a superconductor is a measure of:", 
                options: ["Its critical temperature", "The binding energy of Cooper pairs", "Its magnetic field strength", "Its resistance"], 
                answer: "The binding energy of Cooper pairs" 
            },
            { 
                question: "Which type of lattice has a coordination number of 12?", 
                options: ["FCC (Face-Centered Cubic)", "BCC (Body-Centered Cubic)", "SC (Simple Cubic)", "Diamond Cubic"], 
                answer: "FCC (Face-Centered Cubic)" 
            },
            { 
                question: "What is emitted during β-decay in nuclear physics?", 
                options: ["Proton", "Electron or positron", "Neutron", "Alpha particle"], 
                answer: "Electron or positron" 
            },
            { 
                question: "The critical temperature of a superconductor is the temperature at which:", 
                options: ["It exhibits zero resistance", "Its resistance is halved", "It becomes an insulator", "Its temperature gradient becomes infinite"], 
                answer: "It exhibits zero resistance" 
            },
            { 
                question: "In dielectrics, the dielectric constant is defined as:", 
                options: ["The ratio of permittivity of the material to free space", "The ability of a material to conduct electricity", "The loss tangent of the material", "The refractive index of the material"], 
                answer: "The ratio of permittivity of the material to free space" 
            },
            { 
                question: "What is the cause of diffraction patterns in X-ray crystallography?", 
                options: ["Interference of scattered X-rays by atoms in a crystal lattice", "Reflection of X-rays from crystal planes", "Refraction of X-rays in the crystal", "Absorption of X-rays by the crystal"], 
                answer: "Interference of scattered X-rays by atoms in a crystal lattice" 
            },
            { 
                question: "What is the purpose of a neutron moderator in nuclear reactors?", 
                options: ["Increase neutron energy", "Slow down fast neutrons", "Absorb excess neutrons", "Increase fuel reactivity"], 
                answer: "Slow down fast neutrons" 
            },
            { 
                question: "Which principle explains the bending of light through a prism?", 
                options: ["Huygens' Principle", "Snell's Law", "Fermat's Principle", "Brewster's Law"], 
                answer: "Snell's Law" 
            },
            { 
                question: "The Miller indices for a plane parallel to the x-axis are:", 
                options: ["(0,1,0)", "(1,0,0)", "(1,1,1)", "(0,0,0)"], 
                answer: "(1,0,0)" 
            },
            { 
                question: "Which property of shape memory alloys makes them unique?", 
                options: ["High electrical resistance", "Return to original shape upon heating", "Large thermal expansion", "High tensile strength"], 
                answer: "Return to original shape upon heating" 
            },
            { 
                question: "Which of the following is a nanomaterial characterization technique?", 
                options: ["X-ray Diffraction (XRD)", "Nuclear Magnetic Resonance (NMR)", "Scanning Electron Microscopy (SEM)", "All of the above"], 
                answer: "All of the above" 
            },
            { 
                question: "What is the function of Cooper pairs in superconductivity?", 
                options: ["Facilitate zero resistance", "Increase resistance", "Enhance thermal conductivity", "Block electric currents"], 
                answer: "Facilitate zero resistance" 
            },
            { 
                question: "What determines the speed of ultrasonic waves in a medium?", 
                options: ["Density and elastic modulus of the medium", "Temperature of the medium", "Conductivity of the medium", "Optical properties of the medium"], 
                answer: "Density and elastic modulus of the medium" 
            }
    ],

  "Combined Test 2":[
    { 
        question: "What is the role of a piezoelectric crystal in an ultrasonic transducer?", 
        options: ["To amplify sound waves", "To convert electrical energy into mechanical vibrations", "To store sound waves", "To increase sound frequency"], 
        answer: "To convert electrical energy into mechanical vibrations" 
    },
    { 
        question: "Which principle underlies the operation of optical fibers?", 
        options: ["Reflection", "Refraction", "Total internal reflection", "Diffraction"], 
        answer: "Total internal reflection" 
    },
    { 
        question: "What is the unit of Planck's constant?", 
        options: ["Joule", "Joule-second", "Newton-meter", "Watt-second"], 
        answer: "Joule-second" 
    },
    { 
        question: "Which structure is not a type of Bravais lattice?", 
        options: ["Face-centered cubic", "Body-centered cubic", "Hexagonal close-packed", "Amorphous"], 
        answer: "Amorphous" 
    },
    { 
        question: "What is the primary advantage of using carbon nanotubes in materials science?", 
        options: ["High electrical resistance", "Exceptional strength and conductivity", "Light absorption capability", "High magnetic properties"], 
        answer: "Exceptional strength and conductivity" 
    },
    { 
        question: "What is the result of electron diffraction through a crystal?", 
        options: ["Continuous spectrum", "Discrete diffraction pattern", "Scattered light", "Absorbed energy"], 
        answer: "Discrete diffraction pattern" 
    },
    { 
        question: "Which of the following is a property of superconductors?", 
        options: ["High electrical resistance", "Perfect diamagnetism", "High thermal conductivity", "High magnetic permeability"], 
        answer: "Perfect diamagnetism" 
    },
    { 
        question: "The wavelength of X-rays used in crystallography typically ranges from:", 
        options: ["1–10 nm", "0.01–0.1 nm", "100–200 nm", "10–50 μm"], 
        answer: "0.01–0.1 nm" 
    },
    { 
        question: "Which material is commonly used for neutron absorption in nuclear reactors?", 
        options: ["Lead", "Cadmium", "Carbon", "Silicon"], 
        answer: "Cadmium" 
    },
    { 
        question: "What does the band gap in a semiconductor determine?", 
        options: ["Its optical properties", "Its conductivity", "Its thermal stability", "All of the above"], 
        answer: "Its conductivity" 
    },
    { 
        question: "What is the main factor that affects ultrasonic wave attenuation?", 
        options: ["Frequency of the wave", "Amplitude of the wave", "Length of the wave", "Phase of the wave"], 
        answer: "Frequency of the wave" 
    },
    { 
        question: "What is the Bragg’s Law equation for X-ray diffraction?", 
        options: ["nλ = 2dsinθ", "nλ = 2dcosθ", "nλ = dsinθ", "λ = 2d/n"], 
        answer: "nλ = 2dsinθ" 
    },
    { 
        question: "What does the refractive index of a material measure?", 
        options: ["The speed of light in the material", "The angle of reflection", "The bending of light", "The ratio of speed of light in vacuum to the material"], 
        answer: "The ratio of speed of light in vacuum to the material" 
    },
    { 
        question: "The term 'phonons' refers to:", 
        options: ["Quantum of sound or vibrational energy", "Electrons in a semiconductor", "Photons in an optical fiber", "Magnetic domains in a crystal"], 
        answer: "Quantum of sound or vibrational energy" 
    },
    { 
        question: "Which quantum number specifies the shape of an orbital?", 
        options: ["Principal quantum number", "Azimuthal quantum number", "Magnetic quantum number", "Spin quantum number"], 
        answer: "Azimuthal quantum number" 
    },
    { 
        question: "What does a dielectric material do when placed in an electric field?", 
        options: ["Conducts electricity", "Becomes polarized", "Generates sound", "Reflects light"], 
        answer: "Becomes polarized" 
    },
    { 
        question: "What causes the splitting of spectral lines in the presence of a magnetic field?", 
        options: ["Zeeman effect", "Doppler effect", "Photoelectric effect", "Compton effect"], 
        answer: "Zeeman effect" 
    },
    { 
        question: "Which material is used as a moderator in fast neutron reactors?", 
        options: ["Heavy water", "Graphite", "Cadmium", "Boron"], 
        answer: "Graphite" 
    },
    { 
        question: "The wave-particle duality is explained by:", 
        options: ["Newton's Laws", "Maxwell's equations", "De Broglie's hypothesis", "Bohr's model"], 
        answer: "De Broglie's hypothesis" 
    },
    { 
        question: "What is the purpose of the coating in optical fibers?", 
        options: ["To prevent light loss", "To increase the speed of transmission", "To prevent external interference", "All of the above"], 
        answer: "To prevent light loss" 
    },
    { 
        question: "The critical frequency of a material is related to its:", 
        options: ["Work function", "Photoelectric emission", "Refractive index", "Thermal conductivity"], 
        answer: "Work function" 
    },
    { 
        question: "What is the maximum number of electrons that can occupy the d-orbitals in an atom?", 
        options: ["2", "6", "10", "14"], 
        answer: "10" 
    },
    { 
        question: "Which technique is used for determining the crystal structure of a material?", 
        options: ["X-ray diffraction", "Scanning tunneling microscopy", "Electron spin resonance", "UV-Vis spectroscopy"], 
        answer: "X-ray diffraction" 
    },
    { 
        question: "In nuclear reactions, what does the term 'binding energy' refer to?", 
        options: ["Energy needed to hold protons in the nucleus", "Energy required to separate the nucleus into individual nucleons", "Energy released during fission", "Energy of the emitted radiation"], 
        answer: "Energy required to separate the nucleus into individual nucleons" 
    },
    { 
        question: "Which type of crystal structure does diamond have?", 
        options: ["FCC", "BCC", "Simple cubic", "Tetrahedral"], 
        answer: "Tetrahedral" 
    },
    { 
        question: "What is the main characteristic of a Type-II superconductor?", 
        options: ["Single critical magnetic field", "Low critical temperature", "Two distinct critical magnetic fields", "No magnetic fields penetrate the material"], 
        answer: "Two distinct critical magnetic fields" 
    },
    { 
        question: "Which principle is used in determining the energy levels of electrons in a hydrogen atom?", 
        options: ["Bohr's model", "Heisenberg's uncertainty principle", "Schrödinger equation", "Pauli exclusion principle"], 
        answer: "Bohr's model" 
    },
    { 
        question: "What is the purpose of an anti-reflective coating on lenses?", 
        options: ["Increase reflection", "Reduce light scattering", "Minimize light absorption", "Reduce reflection and increase transmission"], 
        answer: "Reduce reflection and increase transmission" 
    },
    { 
        question: "What is the lattice constant in a crystal?", 
        options: ["The distance between adjacent atoms in a plane", "The distance between two parallel planes", "The angle between two lattice planes", "The volume of the unit cell"], 
        answer: "The distance between two parallel planes" 
    },
    { 
        question: "What is the main application of ferroelectric materials?", 
        options: ["Magnetic storage", "Piezoelectric devices", "Thermal insulation", "Optical fibers"], 
        answer: "Piezoelectric devices" 
    }
],

"Combined Test 3": [
    
        { 
            question: "What is the typical range of ultrasonic frequencies?", 
            options: ["20 Hz to 20 kHz", "20 kHz to 1 GHz", "1 GHz to 10 GHz", "10 Hz to 10 MHz"], 
            answer: "20 kHz to 1 GHz" 
        },
        { 
            question: "Which phenomenon causes the bending of light as it passes from one medium to another?", 
            options: ["Reflection", "Refraction", "Diffraction", "Dispersion"], 
            answer: "Refraction" 
        },
        { 
            question: "The Schrödinger equation is fundamental to which branch of physics?", 
            options: ["Thermodynamics", "Quantum Mechanics", "Optics", "Electromagnetism"], 
            answer: "Quantum Mechanics" 
        },
        { 
            question: "What is the coordination number in a face-centered cubic (FCC) crystal structure?", 
            options: ["6", "8", "10", "12"], 
            answer: "12" 
        },
        { 
            question: "Which material is commonly used for the core of optical fibers?", 
            options: ["Plastic", "Quartz glass", "Acrylic", "Silicon"], 
            answer: "Quartz glass" 
        },
        { 
            question: "What does the term 'phonons' in solid-state physics refer to?", 
            options: ["Lattice vibrations", "Crystal defects", "Electron holes", "Impurities"], 
            answer: "Lattice vibrations" 
        },
        { 
            question: "What property of dielectrics is measured by the dielectric constant?", 
            options: ["Magnetic permeability", "Polarizability", "Conductivity", "Resistivity"], 
            answer: "Polarizability" 
        },
        { 
            question: "What does the Heisenberg Uncertainty Principle state?", 
            options: ["You cannot measure energy and time simultaneously", "You cannot measure position and momentum precisely at the same time", "Waves cannot overlap", "Particles have no definite trajectory"], 
            answer: "You cannot measure position and momentum precisely at the same time" 
        },
        { 
            question: "Which principle is used in nuclear magnetic resonance (NMR)?", 
            options: ["Resonance of electromagnetic waves", "Spin alignment of nuclei in a magnetic field", "Magnetic dipole interaction", "Atomic electron transitions"], 
            answer: "Spin alignment of nuclei in a magnetic field" 
        },
        { 
            question: "What is the main purpose of annealing a material?", 
            options: ["To increase hardness", "To relieve internal stresses", "To improve ductility", "To increase brittleness"], 
            answer: "To relieve internal stresses" 
        },
        { 
            question: "Which optical phenomenon is responsible for the formation of a rainbow?", 
            options: ["Reflection", "Refraction and dispersion", "Diffraction", "Polarization"], 
            answer: "Refraction and dispersion" 
        },
        { 
            question: "What is the energy gap between the valence band and conduction band in semiconductors?", 
            options: ["0–1 eV", "1–3 eV", "3–5 eV", ">5 eV"], 
            answer: "1–3 eV" 
        },
        { 
            question: "What is the purpose of the critical angle in total internal reflection?", 
            options: ["To allow light to pass through", "To reflect light completely", "To reduce refractive index", "To increase light absorption"], 
            answer: "To reflect light completely" 
        },
        { 
            question: "Which type of bonding holds atoms together in a crystal lattice?", 
            options: ["Ionic", "Covalent", "Metallic", "All of the above"], 
            answer: "All of the above" 
        },
        { 
            question: "What is the characteristic property of Type-I superconductors?", 
            options: ["High critical field", "Perfect diamagnetism below critical temperature", "Partial diamagnetism", "No transition temperature"], 
            answer: "Perfect diamagnetism below critical temperature" 
        },
        { 
            question: "Which instrument is used to measure ultrasonic waves?", 
            options: ["Oscilloscope", "Transducer", "Ultrasonic interferometer", "Sonar"], 
            answer: "Ultrasonic interferometer" 
        },
        { 
            question: "What does a wavefunction in quantum mechanics represent?", 
            options: ["Particle's energy", "Probability amplitude", "Particle's speed", "Particle's position"], 
            answer: "Probability amplitude" 
        },
        { 
            question: "What is the most common type of point defect in crystals?", 
            options: ["Vacancies", "Dislocations", "Interstitials", "Grain boundaries"], 
            answer: "Vacancies" 
        },
        { 
            question: "What does the term 'quasi-particles' in physics include?", 
            options: ["Phonons and magnons", "Electrons and protons", "Photons and neutrinos", "Neutrons and quarks"], 
            answer: "Phonons and magnons" 
        },
        { 
            question: "In a laser, what causes population inversion?", 
            options: ["High energy photons", "Pumping mechanism", "Low energy electrons", "Stimulated absorption"], 
            answer: "Pumping mechanism" 
        },
        { 
            question: "The Miller indices (h, k, l) in crystallography are used to:", 
            options: ["Identify the color of a crystal", "Determine the spacing between planes", "Label atomic positions", "Measure crystal strength"], 
            answer: "Determine the spacing between planes" 
        },
        { 
            question: "What does the Curie temperature represent?", 
            options: ["The temperature at which a material becomes superconducting", "The temperature at which a material loses its magnetism", "The melting point of ferromagnets", "The critical temperature for dielectric breakdown"], 
            answer: "The temperature at which a material loses its magnetism" 
        },
        { 
            question: "Which phenomenon proves that light behaves like a wave?", 
            options: ["Photoelectric effect", "Interference", "Compton effect", "Emission spectrum"], 
            answer: "Interference" 
        },
        { 
            question: "What is the role of a moderator in a nuclear reactor?", 
            options: ["Absorb neutrons", "Slow down fast neutrons", "Generate heat", "Prevent radiation leakage"], 
            answer: "Slow down fast neutrons" 
        },
        { 
            question: "Which factor determines the resolving power of an optical microscope?", 
            options: ["Wavelength of light", "Lens material", "Sample size", "Angle of incidence"], 
            answer: "Wavelength of light" 
        },
        { 
            question: "The superconducting state is destroyed by:", 
            options: ["High temperatures", "Magnetic fields", "Both high temperatures and magnetic fields", "Low pressures"], 
            answer: "Both high temperatures and magnetic fields" 
        },
        { 
            question: "What does Bragg’s law help determine in crystallography?", 
            options: ["Crystal symmetry", "Crystal defects", "Crystal spacing", "Lattice energy"], 
            answer: "Crystal spacing" 
        },
        { 
            question: "What is a typical property of advanced composite materials?", 
            options: ["Low strength-to-weight ratio", "High corrosion resistance", "Low thermal resistance", "Low ductility"], 
            answer: "High corrosion resistance" 
        },
        { 
            question: "Which optical device uses constructive and destructive interference?", 
            options: ["Polarizer", "Diffraction grating", "Lens", "Prism"], 
            answer: "Diffraction grating" 
        },
        { 
            question: "What is the effect of doping in semiconductors?", 
            options: ["Increases bandgap", "Enhances conductivity", "Decreases mobility", "Improves heat dissipation"], 
            answer: "Enhances conductivity" 
        }
    
],
    "Quantum Mechanics": [
        { question: "What is the smallest unit of energy called?", options: ["Photon", "Proton", "Neutron", "Electron"], answer: "Photon" },
        { question: "Who proposed the uncertainty principle?", options: ["Albert Einstein", "Werner Heisenberg", "Niels Bohr", "Max Planck"], answer: "Werner Heisenberg" },
        { question: "What is the speed of light in a vacuum?", options: ["3 × 10^8 m/s", "5 × 10^6 m/s", "2 × 10^5 m/s", "1 × 10^3 m/s"], answer: "3 × 10^8 m/s" },
        { question: "What does the wave function describe?", options: ["Position of a particle", "Probability of finding a particle", "Mass of a particle", "Charge of a particle"], answer: "Probability of finding a particle" },
        { question: "Which of these particles has no charge?", options: ["Neutron", "Proton", "Electron", "Photon"], answer: "Neutron" },
        { question: "What is Planck's constant approximately equal to?", options: ["6.63 × 10^-34 Js", "9.11 × 10^-31 kg", "3 × 10^8 m/s", "1 × 10^-10 m"], answer: "6.63 × 10^-34 Js" },
        { question: "The dual nature of light includes:", options: ["Wave and particle nature", "Mass and charge", "Energy and momentum", "Frequency and amplitude"], answer: "Wave and particle nature" },
        { question: "What is the photoelectric effect?", options: ["Emission of electrons due to light", "Reflection of light", "Splitting of light into colors", "Absorption of light"], answer: "Emission of electrons due to light" },
        { question: "Which scientist developed the quantum theory?", options: ["Max Planck", "Isaac Newton", "Marie Curie", "Albert Einstein"], answer: "Max Planck" },
        { question: "What is a quantum?", options: ["A small, discrete packet of energy", "A type of particle", "A wave function", "An atomic orbit"], answer: "A small, discrete packet of energy" },
        { question: "What does the Bohr model describe?", options: ["Electron orbits in an atom", "Waves in quantum mechanics", "Speed of light", "Energy conservation"], answer: "Electron orbits in an atom" },
        { question: "What is the Heisenberg Uncertainty Principle?", options: ["Position and momentum cannot both be precisely known", "Energy is constant", "Mass and energy are equivalent", "Light has wave nature"], answer: "Position and momentum cannot both be precisely known" },
        { question: "What are quanta of light called?", options: ["Photons", "Electrons", "Protons", "Neutrons"], answer: "Photons" },
        { question: "The principle quantum number specifies:", options: ["Electron's energy level", "Electron's mass", "Electron's speed", "Electron's charge"], answer: "Electron's energy level" },
        { question: "The speed of light is fastest in:", options: ["Vacuum", "Water", "Glass", "Air"], answer: "Vacuum" },
        { question: "Who introduced the concept of wave-particle duality?", options: ["Louis de Broglie", "Max Planck", "Niels Bohr", "Erwin Schrödinger"], answer: "Louis de Broglie" },
        { question: "The photon is a particle of:", options: ["Light", "Sound", "Heat", "Matter"], answer: "Light" },
        { question: "Quantum mechanics primarily studies:", options: ["Microscopic particles", "Planetary motion", "Fluids", "Sound waves"], answer: "Microscopic particles" },
        { question: "What is a blackbody?", options: ["An ideal absorber of radiation", "A heavy particle", "A neutron-rich atom", "A type of star"], answer: "An ideal absorber of radiation" },
        { question: "Which particle is neutral?", options: ["Neutron", "Proton", "Electron", "Photon"], answer: "Neutron" },
        { question: "What causes energy quantization in atoms?", options: ["Discrete electron energy levels", "Mass of protons", "Photon emission", "Speed of light"], answer: "Discrete electron energy levels" },
        { question: "What is the wavelength range of visible light?", options: ["400-700 nm", "100-200 nm", "700-1000 nm", "50-100 nm"], answer: "400-700 nm" },
        { question: "What does the Schrödinger equation describe?", options: ["Wave behavior of particles", "Mass of particles", "Speed of light", "Energy conservation"], answer: "Wave behavior of particles" },
        { question: "Quantum tunneling involves:", options: ["Particles crossing a barrier they normally can't", "Electrons jumping to higher orbits", "Waves spreading out", "Photon emission"], answer: "Particles crossing a barrier they normally can't" },
        { question: "What is the energy of a photon proportional to?", options: ["Frequency", "Mass", "Wavelength", "Amplitude"], answer: "Frequency" },
        { question: "What is the spin of an electron?", options: ["1/2", "0", "1", "-1"], answer: "1/2" },
        { question: "What is the significance of the Planck constant?", options: ["Defines energy quantization", "Defines mass conservation", "Describes particle speed", "Measures light intensity"], answer: "Defines energy quantization" },
        { question: "What does 'quantum' mean in Latin?", options: ["How much", "How far", "How fast", "How big"], answer: "How much" },
        { question: "What is an orbital?", options: ["Region where an electron is likely found", "Electron's speed", "Electron's mass", "Electron's charge"], answer: "Region where an electron is likely found" },
        { question: "Which experiment confirmed the particle nature of light?", options: ["Photoelectric effect", "Double-slit experiment", "Blackbody radiation", "Michelson-Morley experiment"], answer: "Photoelectric effect" }
    ],
    "Crystal Structure and Nuclear Physics": [
        { question: "What is the basic repeating unit in a crystal structure called?", options: ["Unit cell", "Lattice point", "Grain boundary", "Crystal plane"], answer: "Unit cell" },
        { question: "What type of structure do most metals have?", options: ["Face-centered cubic", "Hexagonal close-packed", "Simple cubic", "Amorphous"], answer: "Face-centered cubic" },
        { question: "What is the coordination number in a body-centered cubic (BCC) structure?", options: ["8", "6", "12", "4"], answer: "8" },
        { question: "What is the coordination number in a face-centered cubic (FCC) structure?", options: ["12", "6", "8", "4"], answer: "12" },
        { question: "Which of the following is an example of an amorphous material?", options: ["Glass", "Iron", "Diamond", "Copper"], answer: "Glass" },
        { question: "What does the term 'crystal lattice' refer to?", options: ["Regular arrangement of atoms", "Irregular arrangement of atoms", "Vacant sites in a material", "Movement of electrons"], answer: "Regular arrangement of atoms" },
        { question: "Which of these materials typically has a hexagonal close-packed (HCP) structure?", options: ["Magnesium", "Gold", "Aluminum", "Iron"], answer: "Magnesium" },
        { question: "What is a grain boundary?", options: ["A region between two crystals", "The smallest repeating unit in a crystal", "A defect within a crystal", "A property of amorphous materials"], answer: "A region between two crystals" },
        { question: "What is the term for the 3D arrangement of atoms in a crystal?", options: ["Crystal structure", "Grain boundary", "Atomic density", "Amorphous pattern"], answer: "Crystal structure" },
        { question: "What is the atomic packing factor (APF) for FCC structures?", options: ["0.74", "0.68", "0.52", "0.90"], answer: "0.74" },
        { question: "What kind of lattice structure does diamond have?", options: ["Cubic", "Hexagonal", "Tetragonal", "Orthorhombic"], answer: "Cubic" },
        { question: "Which is the simplest crystal structure?", options: ["Simple cubic", "Face-centered cubic", "Body-centered cubic", "Hexagonal close-packed"], answer: "Simple cubic" },
        { question: "What is a point defect in a crystal?", options: ["A missing atom", "A grain boundary", "An entire missing layer", "The entire lattice"], answer: "A missing atom" },
        { question: "What is the purpose of X-ray diffraction in crystal studies?", options: ["Determine atomic arrangement", "Measure temperature", "Identify density", "Inspect defects"], answer: "Determine atomic arrangement" },
        { question: "Which of these materials has a crystalline structure?", options: ["Salt", "Plastic", "Glass", "Rubber"], answer: "Salt" },
        { 
          question: "What is the atomic number of hydrogen?", 
          options: ["1", "2", "3", "4"], 
          answer: "1" 
      },
      { 
          question: "What is the main fuel used in nuclear power plants?", 
          options: ["Coal", "Uranium", "Oil", "Natural Gas"], 
          answer: "Uranium" 
      },
      { 
          question: "What is the unit of radioactivity?", 
          options: ["Joule", "Gray", "Becquerel", "Volt"], 
          answer: "Becquerel" 
      },
      { 
          question: "Who discovered the neutron?", 
          options: ["Marie Curie", "J.J. Thomson", "Ernest Rutherford", "James Chadwick"], 
          answer: "James Chadwick" 
      },
      { 
          question: "Which element is commonly used as a moderator in nuclear reactors?", 
          options: ["Carbon", "Water", "Graphite", "Helium"], 
          answer: "Graphite" 
      },
      { 
          question: "What is the process in which a heavy atomic nucleus splits into two smaller nuclei?", 
          options: ["Fission", "Fusion", "Radiation", "Decay"], 
          answer: "Fission" 
      },
      { 
          question: "Which of these particles has no charge?", 
          options: ["Electron", "Proton", "Neutron", "Alpha particle"], 
          answer: "Neutron" 
      },
      { 
          question: "What is the energy released in a nuclear reaction called?", 
          options: ["Fusion Energy", "Fission Energy", "Thermal Energy", "Kinetic Energy"], 
          answer: "Fission Energy" 
      },
      { 
          question: "In a nuclear power plant, what type of reaction occurs?", 
          options: ["Nuclear Fusion", "Nuclear Fission", "Radioactive Decay", "Chemical Reaction"], 
          answer: "Nuclear Fission" 
      },
      { 
          question: "What type of radiation is blocked by a sheet of paper?", 
          options: ["Alpha", "Beta", "Gamma", "X-ray"], 
          answer: "Alpha" 
      },
      { 
          question: "What is the most common isotope of uranium used in nuclear reactors?", 
          options: ["Uranium-235", "Uranium-238", "Uranium-239", "Uranium-234"], 
          answer: "Uranium-235" 
      },
      { 
          question: "What is the speed of light?", 
          options: ["3 x 10^8 m/s", "2 x 10^8 m/s", "1 x 10^8 m/s", "4 x 10^8 m/s"], 
          answer: "3 x 10^8 m/s" 
      },
      { 
          question: "Which of the following is a type of nuclear radiation?", 
          options: ["Alpha", "Beta", "Gamma", "All of the above"], 
          answer: "All of the above" 
      },
      { 
          question: "In which year was the first atomic bomb tested?", 
          options: ["1942", "1945", "1950", "1960"], 
          answer: "1945" 
      }
        ],
    "Physics of Advanced Materials": [
        { 
            question: "What is the primary property of a material that determines its electrical conductivity?",
            options: ["Density", "Temperature", "Band Gap", "Mass"],
            answer: "Band Gap"
        },
        { 
            question: "Which of the following is an example of a ferromagnetic material?",
            options: ["Copper", "Iron", "Aluminum", "Wood"],
            answer: "Iron"
        },
        { 
            question: "What is the phenomenon in which the atomic structure of a material changes due to temperature?",
            options: ["Conduction", "Dilatation", "Thermal expansion", "Phase change"],
            answer: "Thermal expansion"
        },
        { 
            question: "Which material is typically used in semiconductor devices?",
            options: ["Silicon", "Wood", "Gold", "Rubber"],
            answer: "Silicon"
        },
        { 
            question: "What is the term for the ability of a material to return to its original shape after deformation?",
            options: ["Plasticity", "Elasticity", "Hardness", "Brittleness"],
            answer: "Elasticity"
        },
        { 
            question: "In materials science, which term describes the measure of a material's ability to conduct electricity?",
            options: ["Resistivity", "Conductivity", "Impedance", "Flux"],
            answer: "Conductivity"
        },
        { 
            question: "What does the term 'alloy' refer to?",
            options: ["A pure metal", "A combination of metals", "A synthetic material", "A plastic material"],
            answer: "A combination of metals"
        },
        { 
            question: "Which of the following materials is known for its high thermal conductivity?",
            options: ["Wood", "Copper", "Rubber", "Plastic"],
            answer: "Copper"
        },
        { 
            question: "What does the term 'hardness' refer to in material science?",
            options: ["A material's ability to conduct electricity", "A material's resistance to deformation", "A material's ability to stretch", "A material's ductility"],
            answer: "A material's resistance to deformation"
        },
        { 
            question: "Which material is commonly used in the fabrication of photovoltaic cells?",
            options: ["Copper", "Silicon", "Glass", "Aluminum"],
            answer: "Silicon"
        },
        { 
            question: "What is the key property that distinguishes a superconductor from other materials?",
            options: ["Zero electrical resistance", "High thermal conductivity", "Low density", "High melting point"],
            answer: "Zero electrical resistance"
        },
        { 
            question: "What type of material is used in the creation of piezoelectric devices?",
            options: ["Ceramic", "Wood", "Plastic", "Metal"],
            answer: "Ceramic"
        },
        { 
            question: "Which material is known for its high tensile strength and is commonly used in aerospace applications?",
            options: ["Aluminum", "Steel", "Gold", "Copper"],
            answer: "Steel"
        },
        { 
            question: "Which of the following is not a property of a polymer material?",
            options: ["Elasticity", "Ductility", "Malleability", "Insolubility"],
            answer: "Insolubility"
        },
        { 
            question: "Which material is known for its ability to absorb light and convert it into electrical energy?",
            options: ["Plastic", "Silicon", "Gold", "Copper"],
            answer: "Silicon"
        },
        { 
          question: "What is the primary property of a material that determines its electrical conductivity?",
          options: ["Density", "Temperature", "Band Gap", "Mass"],
          answer: "Band Gap"
      },
      { 
          question: "Which of the following is an example of a ferromagnetic material?",
          options: ["Copper", "Iron", "Aluminum", "Wood"],
          answer: "Iron"
      },
      { 
          question: "What is the phenomenon in which the atomic structure of a material changes due to temperature?",
          options: ["Conduction", "Dilatation", "Thermal expansion", "Phase change"],
          answer: "Thermal expansion"
      },
      { 
          question: "Which material is typically used in semiconductor devices?",
          options: ["Silicon", "Wood", "Gold", "Rubber"],
          answer: "Silicon"
      },
      { 
          question: "What is the term for the ability of a material to return to its original shape after deformation?",
          options: ["Plasticity", "Elasticity", "Hardness", "Brittleness"],
          answer: "Elasticity"
      },
      { 
          question: "In materials science, which term describes the measure of a material's ability to conduct electricity?",
          options: ["Resistivity", "Conductivity", "Impedance", "Flux"],
          answer: "Conductivity"
      },
      { 
          question: "What does the term 'alloy' refer to?",
          options: ["A pure metal", "A combination of metals", "A synthetic material", "A plastic material"],
          answer: "A combination of metals"
      },
      { 
          question: "Which of the following materials is known for its high thermal conductivity?",
          options: ["Wood", "Copper", "Rubber", "Plastic"],
          answer: "Copper"
      },
      { 
          question: "What does the term 'hardness' refer to in material science?",
          options: ["A material's ability to conduct electricity", "A material's resistance to deformation", "A material's ability to stretch", "A material's ductility"],
          answer: "A material's resistance to deformation"
      },
      { 
          question: "Which material is commonly used in the fabrication of photovoltaic cells?",
          options: ["Copper", "Silicon", "Glass", "Aluminum"],
          answer: "Silicon"
      },
      { 
          question: "What is the key property that distinguishes a superconductor from other materials?",
          options: ["Zero electrical resistance", "High thermal conductivity", "Low density", "High melting point"],
          answer: "Zero electrical resistance"
      },
      { 
          question: "What type of material is used in the creation of piezoelectric devices?",
          options: ["Ceramic", "Wood", "Plastic", "Metal"],
          answer: "Ceramic"
      },
      { 
          question: "Which material is known for its ability to absorb light and convert it into electrical energy?",
          options: ["Plastic", "Silicon", "Gold", "Copper"],
          answer: "Silicon"
      },
      { 
          question: "Which material is commonly used for making high-strength cables?",
          options: ["Copper", "Steel", "Iron", "Plastic"],
          answer: "Steel"
      },
      { 
          question: "Which of the following is an example of a ceramic material?",
          options: ["Silicon", "Glass", "Plastic", "Copper"],
          answer: "Glass"
      },
      { 
          question: "Which of the following properties does a material with high ductility exhibit?",
          options: ["It can be easily bent", "It can conduct electricity well", "It is hard", "It is brittle"],
          answer: "It can be easily bent"
      },
      { 
          question: "Which of the following is used in the manufacture of solar cells?",
          options: ["Aluminum", "Copper", "Silicon", "Plastic"],
          answer: "Silicon"
      },
      { 
          question: "What is the term for the ability of a material to resist wear or scratching?",
          options: ["Tensile strength", "Hardness", "Malleability", "Elasticity"],
          answer: "Hardness"
      },
      { 
          question: "What type of bonding is present in materials like diamond and graphite?",
          options: ["Ionic", "Covalent", "Metallic", "Van der Waals"],
          answer: "Covalent"
      },
      { 
          question: "What is the primary factor that determines a material's melting point?",
          options: ["Molecular structure", "Density", "Color", "Mass"],
          answer: "Molecular structure"
      },
      { 
          question: "Which material exhibits the highest electrical conductivity?",
          options: ["Copper", "Iron", "Aluminum", "Graphene"],
          answer: "Graphene"
      },
      { 
          question: "Which type of material is characterized by a high resistance to electrical flow?",
          options: ["Conductors", "Insulators", "Semiconductors", "Alloys"],
          answer: "Insulators"
      },
      { 
          question: "Which material is used to make superconducting magnets?",
          options: ["Copper", "Iron", "Yttrium Barium Copper Oxide", "Lead"],
          answer: "Yttrium Barium Copper Oxide"
      },
      { 
          question: "Which of the following materials is typically used in the manufacturing of LCD screens?",
          options: ["Graphene", "Silicon", "Indium tin oxide", "Copper"],
          answer: "Indium tin oxide"
      },
      { 
          question: "Which of the following materials has the highest melting point?",
          options: ["Gold", "Tungsten", "Iron", "Copper"],
          answer: "Tungsten"
      },
      { 
          question: "Which of the following is a key characteristic of a magnetic material?",
          options: ["It can conduct electricity", "It can be magnetized", "It is highly ductile", "It has high melting point"],
          answer: "It can be magnetized"
      },
      { 
          question: "What is the main application of carbon nanotubes?",
          options: ["Solar cells", "Electrical wiring", "Strengthening materials", "Electronics packaging"],
          answer: "Strengthening materials"
      },
      { 
          question: "Which material is commonly used to make electric cables?",
          options: ["Copper", "Rubber", "Silicon", "Aluminum"],
          answer: "Copper"
      }
        ]
};



let currentQuiz = [];
let currentIndex = 0;
let correctAttempts = 0;
let incorrectAttempts = 0;
let incorrectQuestions = [];
let timerInterval;
let totalSeconds = 0;
let selectedAnswers = {}; // Store selected answers for each question

function startQuiz(category) {
    // Reset all variables
    currentQuiz = quizData[category];
    currentIndex = 0;
    correctAttempts = 0;
    incorrectAttempts = 0;
    incorrectQuestions = [];
    totalSeconds = 0;
    selectedAnswers = {}; 


    document.getElementById("total-questions").textContent = `${currentQuiz.length}`;
    document.getElementById("questions-left").textContent = `${currentQuiz.length - currentIndex}/${currentQuiz.length}`;
    document.getElementById("correct-attempts").textContent = `0/${currentQuiz.length}`;
    document.getElementById("incorrect-attempts").textContent = `0/${currentQuiz.length}`;

    document.querySelector(".home-screen").style.display = "none";
    document.querySelector(".quiz-screen").style.display = "block";
    document.getElementById("quiz-title").textContent = category;

    
    startTimer();
    loadQuestion();
}

function loadQuestion() {
    if (currentIndex < currentQuiz.length) {
        const questionData = currentQuiz[currentIndex];
        document.getElementById("question").textContent = questionData.question;

        const optionsContainer = document.querySelector(".options");
        optionsContainer.innerHTML = "";
        questionData.options.forEach((option) => {
            const button = document.createElement("button");
            button.className = "option";
            button.textContent = option;

           
            if (selectedAnswers[currentIndex] === option) {
                button.classList.add(selectedAnswers[currentIndex] === questionData.answer ? "correct" : "incorrect");
                button.disabled = true;
            }

            
            button.onclick = () => {
                if (!selectedAnswers.hasOwnProperty(currentIndex)) {
                    selectedAnswers[currentIndex] = option; 
                    checkAnswer(button, questionData);
                }
            };

            optionsContainer.appendChild(button);
        });

        updateStats();
    } else {
        showSummary();
    }
}

function checkAnswer(selectedOption, questionData) {
    if (selectedOption.textContent === questionData.answer) {
        correctAttempts++;
        selectedOption.classList.add("correct");
    } else {
        incorrectAttempts++;
        selectedOption.classList.add("incorrect");
        incorrectQuestions.push({
            question: questionData.question,
            correctAnswer: questionData.answer,
        });
    }

    updateStats();
}

function nextQuestion() {
    if (currentIndex < currentQuiz.length - 1) {
        currentIndex++;
        loadQuestion();
    } else {
        showSummary();
    }
}

function prevQuestion() {
    if (currentIndex > 0) {
        currentIndex--;
        loadQuestion();
    }
}

function updateStats() {
    document.getElementById("questions-left").textContent = `${currentQuiz.length - currentIndex - 1}/${currentQuiz.length}`;
    document.getElementById("correct-attempts").textContent = `${correctAttempts}/${currentQuiz.length}`;
    document.getElementById("incorrect-attempts").textContent = `${incorrectAttempts}/${currentQuiz.length}`;
}

function endQuiz() {
    clearInterval(timerInterval);
    showSummary();
}

function showSummary() {
    clearInterval(timerInterval);

    document.querySelector(".quiz-screen").style.display = "none";
    document.querySelector(".result-screen").style.display = "block";

    const unattempted = currentQuiz.length - (correctAttempts + incorrectAttempts);
    const correctPercentage = ((correctAttempts / currentQuiz.length) * 100).toFixed(2);
    const incorrectPercentage = ((incorrectAttempts / currentQuiz.length) * 100).toFixed(2);
    const unattemptedPercentage = ((unattempted / currentQuiz.length) * 100).toFixed(2);

    const totalTime = formatTime(totalSeconds);

   
    let summaryHTML = `
        <p>Total Questions: ${currentQuiz.length}</p>
        <p>Correct Attempts: ${correctAttempts}</p>
        <p>Incorrect Attempts: ${incorrectAttempts}</p>
        <p>Unattempted Questions: ${unattempted}</p>
        <p>Time Taken: ${totalTime}</p>
    `;

    
    if (incorrectQuestions.length > 0) {
        summaryHTML += `<h3>Incorrect Questions</h3>`;
        incorrectQuestions.forEach((item) => {
            summaryHTML += `<p>Q: ${item.question} <br> Correct Answer: ${item.correctAnswer}</p>`;
        });
    }

    document.getElementById("summary").innerHTML = summaryHTML;

    
    const ctx = document.getElementById("result-chart").getContext("2d");
    if (window.resultChart) {
        window.resultChart.destroy(); 
    }
    window.resultChart = new Chart(ctx, {
        type: "pie",
        data: {
            labels: ["Correct", "Incorrect", "Unattempted"],
            datasets: [{
                data: [correctAttempts, incorrectAttempts, unattempted],
                backgroundColor: ["#28a745", "#dc3545", "#6c757d"]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: "bottom"
                }
            }
        }
    });
}

function returnToHome() {
    document.querySelector(".result-screen").style.display = "none";
    document.querySelector(".home-screen").style.display = "block";
}

function startTimer() {
    timerInterval = setInterval(() => {
        totalSeconds++;
        document.getElementById("quiz-timer").textContent = formatTime(totalSeconds);
    }, 1000);
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
}

function restartQuiz() {
    
    startQuiz(document.getElementById("quiz-title").textContent);
}

function retryIncorrectQuestions() {
    if (incorrectQuestions.length === 0) {
        alert("No incorrect questions to retry!");
        return;
    }

    // Prepare the quiz with only the incorrect questions
    currentQuiz = incorrectQuestions.map(item => {
        const originalQuestion = quizData[document.getElementById("quiz-title").textContent]
            .find(q => q.question === item.question);
        
        return {
            question: item.question,
            options: originalQuestion.options,
            answer: item.correctAnswer
        };
    });

    // Reset all variables for the new quiz
    currentIndex = 0;
    correctAttempts = 0;
    incorrectAttempts = 0;
    incorrectQuestions = [];
    totalSeconds = 0;
    selectedAnswers = {}; // Clear selected answers

    // Update UI and start the timer
    document.getElementById("total-questions").textContent = `${currentQuiz.length}`;
    document.getElementById("questions-left").textContent = `${currentQuiz.length}/${currentQuiz.length}`;
    document.getElementById("correct-attempts").textContent = `0/${currentQuiz.length}`;
    document.getElementById("incorrect-attempts").textContent = `0/${currentQuiz.length}`;
    document.querySelector(".result-screen").style.display = "none";
    document.querySelector(".quiz-screen").style.display = "block";

    startTimer();
    loadQuestion();
}

