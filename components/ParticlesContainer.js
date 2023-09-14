import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import React, { useCallback } from "react";
import { Link } from 'next/link';
const ParticlesContainer = () => {
  // Define a callback function to load the full particle engine when the component mounts
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // Define another callback function for when the particle engine is loaded
  const particlesLoaded = useCallback(async () => {}, []);

  // Render the Particles component with specified options
  return (
    <Particles
      className="w-full h-full absolute translate-z-0"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullscreen: false,
        background: {
          color: {
            value: "", // This value should be replaced with the desired background color in CSS format (e.g., "#ffffff" for white)
          },
        },
        fps_limit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              Quantity: 90
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#e68e2e',
          },
          links: {
            color: '#f5d393',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1

          },
          collisions: {
            enable: true
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 1,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 80
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle'
          },
          size: {
            value: {min: 1, max: 5}
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;
