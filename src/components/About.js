import React from "react";
import Layout from "../components/Layout";

function About() {
  return (
    <div>
      <Layout>
        <div className="text-center pt-11 min-h-screen">
          <div class="mb-3 font-mono text-lg">
            &#9737; Have you ever wanted someone to <i>just look at</i> your
            resume and give you some feedback?
          </div>
          <div class="mb-3 font-mono text-lg">
            &#9737; Have you ever struggled to find real resumes to look at, so
            you can see other's experience and career trajectories?
          </div>
          <div class="mb-3 font-mono text-lg">
            &#9737; Have you ever wanted example resumes that weren't 100%
            perfectly attuned to a job posting?
          </div>
          <div class="mt-6 font-mono text-lg">Then this site is for you!</div>
        </div>
      </Layout>
    </div>
  );
}

export default About;
