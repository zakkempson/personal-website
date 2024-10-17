import Head from "next/head";
import React from "react";

const ProductExperimentation = () => {
  return (
    <div style={{ paddingTop: "20rem" }}>
      <Head>
        <title>
          Product Experimentation (in a regulated industry) | Zak Kempson
        </title>
        <meta name="description" content="Product Experimentation" />
      </Head>
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "2rem" }}>
        <h1 style={{ lineHeight: "1", marginBottom: "1rem" }}>
          Product Experimentation
        </h1>
        <h4 className="text-muted-foreground">
          This the article form of a workshop on Product Experimentation I ran
          for Lawtech UK in October 2024.
        </h4>
        <section style={{ marginTop: "4rem" }}>
          <h2>About me</h2>
          <p>
            I’m currently a senior product designer at{" "}
            <a
              href="https://www.shopar.ai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ShopAR
            </a>
            , where for the past three years I’ve worked on augmented reality
            creator tools, 3D pipelines for ecommerce, CMS, dashboards, apps and
            websites with a bunch of exciting clients including Sky, Jimmy Choo,
            Under Armour and Specsavers. Before that, I worked on a writing
            platform for{" "}
            <a
              href="https://www.novlr.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Novlr
            </a>{" "}
            (975% gain in weekly active users) and founded a tour booking
            platform ($0 to $1m annual platform volume).
          </p>
        </section>
        <section style={{ marginTop: "4rem" }}>
          <h2>About this workshop</h2>
          <p>
            Software products are fascinating. You can reach customers wherever
            they are, in a variety of contexts, to help them with a variety of
            tasks. So many contexts you often find yourself swimming in
            ambiguity with hundreds of big and small decisions to make.
          </p>
          <p>
            I've seen time and time again that when I'm part of a team with a
            strong experimental mindset - shifting from "we're building our
            idea" to "we're finding what works" - I build more value, faster. In
            this workshop I aim to share 'things I wish I had learned sooner
            about product experimentation'.
          </p>
          <p>
            As well as discussing general strategies for product
            experimentation, I will also consider experimentation within
            regulated industries. It may seem like the ‘move fast, break things’
            ethos would not work well in spaces where trust and compliance are
            table stakes, when in fact these constraints can be used to great
            advantage when experimenting.
          </p>
        </section>
        <section style={{ marginTop: "4rem" }}>
          <h2>The plan</h2>
          <p>
            In this workshop, we’ll run through three main sections with a mix
            of ideas, activities and discussion.
          </p>
          <ol>
            <li>Experiment toolkit</li>
            <li>Designing experiments</li>
            <li>Doing experiments</li>
          </ol>
        </section>
        <section style={{ marginTop: "5rem" }}>
          <h2>1. Experiment toolkit</h2>
          <h3 style={{ marginTop: "5rem" }}>{`> Why should I experiment?`}</h3>
          <p>
            Let's put the concept to the test. Why do I need it? What happens if
            I don't use it?
          </p>
          <p>
            A good place to start is to look at the Waterfall Method, in some
            ways the nemesis of product experimentation.{" "}
            <a
              href="https://www.youtube.com/watch?v=ecIWPzGEbFc&t=2972s&ab_channel=PaulStringer%27sMobileTech"
              target="_blank"
              rel="noopener noreferrer"
            >
              Acidentally penned
            </a>{" "}
            by software pioneer{" "}
            <a
              href="https://en.wikipedia.org/wiki/Winston_W._Royce"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Winston Royce
            </a>{" "}
            in 1970, it became widely adopted and is still used in software
            today. The Waterfall Method draws principles from pre computer-era
            industries like manufacturing and civil engineering, where projects
            are cumbersome and expensive to alter once construction begins, for
            example when building a bridge.
          </p>
          <p>
            The canyon over which you build a bridge is likely to remain
            unchanged for thousands of years, but in software we are building
            products in on a landscape where user needs, tech and regulation can
            shift rapidly, so a number of unpleasant things can happen when you
            fail to course correct while building your product. Here are a few
            that I've seen in the wild:
          </p>
          <h4>Building on faulty assumptions</h4>
          <p>
            Teams can fall into the trap of believing they can predict all user
            needs and requirements before starting the project. This is a great
            way to build things that people don't actually want or need. With
            experimentation, you can assume the assumption is flawed and only
            bet big on it when you have confidence based on real evidence.
          </p>
          <h4>Late Discovery of Failures</h4>
          <p>
            Waterfall methods lead to late testing, meaning failures are
            discovered too late in the process. With experimentation, you get
            feedback continuously so small failures can be caught and addressed
            before they become catastrophic.
          </p>
          <div className="example">
            <p>Example:</p>
            <p>
              On the first day Heathcare.gov was launched in 2013, four million
              unique users visited the portal, but only six successfully
              registered. Even the users that did sign up experienced errors,
              including duplicates in enrolment applications submitted to
              insurers.
            </p>
          </div>
          <h4>Not Adapting to New Information</h4>
          <p>
            Waterfall assumes that project requirements are locked in once and
            you never revisit them, making it harder to adapt to new
            information, market trends or regulatory changes. With
            experimentation, you are prepared for new information and ready to
            take advantage of it.
          </p>
          <div className="example">
            <p>Example:</p>
            <p>
              Kodak is a classic example. They stuck to their original plan
              (film cameras) and did not adapt to digital photography, even
              though they invented it. They failed to pivot in time.
            </p>
          </div>
          <h3>{`> Root cause analysis (The 5 Whys)`}</h3>
          <p>
            This is a great mental model for identifying the underlying reasons
            for a problem in your product experiments. Instead of focusing on
            surface-level issues, you dig deep to find the true cause. There are
            many variations of this, but the one we run as a team at ShopAR is
            quite simple:
          </p>
          <ol>
            <li>
              State the problem (<i>e.g. Our user engagement is dropping.</i>)
            </li>
            <li>
              Ask "Why?" (
              <i>
                e.g. Why are users not engaging? → Because they’re not finding
                the feature useful.
              </i>
              )
            </li>
            <li>
              Ask "Why?" again (
              <i>
                e.g. Why are they not finding it useful? → Because they’re not
                aware of the feature.
              </i>
              )
            </li>
            <li>
              Keep asking "Why?" until you find a root cause (
              <i>
                e.g. Why are they not aware of the feature? → Because the
                onboarding process doesn't highlight it clearly.
              </i>
              )
            </li>
          </ol>

          <h3
            style={{ marginTop: "5rem" }}
          >{`> Experimenting in regulated spaces`}</h3>
          <p>
            In regulated industries like Lawtech (or Fintech), moving fast while
            maintaining compliance and trust is a balancing act. The core
            challenge is to iterate while staying compliant and building trust.
          </p>
          <p>
            It may seem like you are at a disadvantage compared to teams
            operating in unregulated spaces, but the success of companies like
            Stripe show us that there are reasons to be optimistic that
            regulatory constraints can be used to your advantage.
          </p>
          <p>
            <b>Compliance as a competitive advantage:</b> Stripe built
            compliance with various global standards early-on (e.g., PCI-DSS for
            payment security). This then became an additional reason to use
            their product - if not for the ease of use, then for ‘outsourcing’
            your website’s PCI-compliance to Stripe.
          </p>
          <p>
            <b>Modular infrastructure:</b> Rather than create rigid systems,
            Stripe created a modular architecture that could adapt to various
            currencies and regulations globally (e.g. handing VAT, KYC) which
            allowed them to scale without needing major overhauls for each new
            market.
          </p>
          <p>
            <b>Transparency and simplicity:</b> Transparency is key to building
            trust. In addition to building tools that can handle various
            financial regulatory requirements, Stripe has created resources to
            explain why certain regulations are needed. Especially in Lawtech,
            offering clear, plain-language explanations of complex legal
            concepts can be a way to differentiate from competitors. (Note:
            Recent LLM models are now smart and affordable enough to drastically
            speed up this process, provided plenty of fact-checking to ensure
            details are accurate)
          </p>
          <p>
            <b>Human-AI Interface:</b> On the subject of LLMs, they are now
            smart enough to let less technical users take advantage of complex
            software tools via plain text, in their primary language. This is a
            very new landscape, ripe for reimagining how and where software is
            used. The chat format is getting a lot of attention right now - but
            is unlikely to be the only, or even primary, mode of interaction
            with AI for most people. (
            <a
              href="https://tgoldsmith.co.uk/writing/chat-for-llms"
              target="_blank"
              rel="noopener noreferrer"
            >
              More on that here by my colleague Tom Goldsmith
            </a>
            )
          </p>
          <p>
            <b>Balancing speed with compliance partnerships:</b> Just as you
            might become the company people outsource compliance to, you may
            also find that partnering with established legal firms, compliance
            experts of government bodies may provide a shortcut to compliance
            and trust.
          </p>
          <p>
            <b>Failing safely:</b> From the beginning, Stripe focused on
            creating an infrastructure where small and localised failures are
            possible but catastrophic failures are extremely unlikely. Building
            additional redundancy, sandboxes and additional recovery mechanisms
            may seem like additional effort but may pay off over time as you can
            experiment faster with new features without worrying about critical
            failures that can damage trust with your user base.
          </p>
          <div style={{ marginTop: "5rem" }}>
            <h3
              style={{ marginTop: "5rem" }}
            >{`> Plotting Your Assumptions`}</h3>
            <p>
              Before diving into experiments, it’s really helpful to map out
              your assumptions. This means identifying which assumptions are the
              riskiest (those that, if wrong, could really hurt your product)
              and which are safer. By focusing on the assumptions with the least
              evidence and the highest risk, you can make sure you're tackling
              the most critical unknowns first.
            </p>

            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Least Evidence</th>
                  <th>Most Evidence</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Most Dangerous</strong>
                  </td>
                  <td>!!!☠️☠️☠️!!!</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <strong>Least Dangerous</strong>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>

            <h4>Example from ShopAR:</h4>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Least Evidence</th>
                  <th>Most Evidence</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Most Dangerous</strong>
                  </td>
                  <td>
                    - 3D renders are good enough that companies will be willing
                    to replace traditional photography pipelines
                  </td>
                  <td>
                    - Ecommerce companies invest in product photography in
                    addition to what the manufacturers provide for personalized
                    or seasonal images
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Least Dangerous</strong>
                  </td>
                  <td>
                    - Ecommerce providers already have or are capable of
                    creating 3D models
                  </td>
                  <td>
                    - Ecommerce companies already use synthetic photography
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: "5rem" }}>
            <h3
              style={{ marginTop: "5rem" }}
            >{`> Hypothesis-Driven Development`}</h3>
            <p>
              A lot of teams rush into building solutions without testing their
              assumptions. This can be especially true when people have a lot of
              experience in a specific area — they might feel like they don’t
              need to "go back to basics." But it’s important to frame decisions
              as testable hypotheses, rather than just assumptions. Every
              feature or change should be an answer to a specific question, like
              “Will this feature increase engagement?” or “Will this reduce
              churn by 10%?”
            </p>

            <p>A simple hypothesis template is:</p>
            <blockquote>
              <p>
                We believe that [X feature/change] will result in [Y outcome],
                which we will measure using [Z metric].
              </p>
            </blockquote>

            <h3 style={{ marginTop: "5rem" }}>Activity: Prepare Your Hypotheses</h3>
            <p>
              Now it's your turn! Use the hypothesis template below to create
              some testable assumptions for your product:
            </p>

            <blockquote>
              <p>
                We believe that [X feature/change] will result in [Y outcome],
                which we will measure using [Z metric].
              </p>
            </blockquote>

            <h4>Example from ShopAR:</h4>
            <table>
              <thead>
                <tr>
                  <th>We believe that [X feature/change]</th>
                  <th>Will result in [Y outcome]</th>
                  <th>Which we will measure using [Z metric]</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    We believe that offering high-quality, customizable 3D
                    renders of products will encourage ecommerce companies to
                    reduce their reliance on traditional photography pipelines.
                  </td>
                  <td>
                    Companies will replace at least 50% of their traditional
                    product photography with 3D renders within 6 months.
                  </td>
                  <td>
                    The percentage reduction in spending on traditional
                    photography compared to 3D renders.
                  </td>
                </tr>
                <tr>
                  <td>
                    We believe that providing an easy-to-use tool for generating
                    3D models from existing product images will result in higher
                    adoption rates among ecommerce companies.
                  </td>
                  <td>
                    30% of companies will integrate the 3D model tool into their
                    workflow within the first 3 months.
                  </td>
                  <td>
                    Adoption rate of the 3D model tool measured by the number of
                    active users.
                  </td>
                </tr>
                <tr>
                  <td>
                    We believe that integrating real-time 3D visualization (AR
                    or 360 views) of products will lead to increased conversion
                    rates.
                  </td>
                  <td>
                    The introduction of real-time 3D visualizations will result
                    in a 15% increase in conversion rates.
                  </td>
                  <td>
                    Conversion rate data comparing product pages with and
                    without real-time 3D views.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginTop: "5rem" }}>
          <h2>2. Designing Experiments</h2>
          <h3 style={{ marginTop: "5rem" }}>{`> Experiment focus`}</h3>
          <p>
            Sometimes it's useful to think about experiments in terms of their
            general focus — technical, user, business, or process—to make sure
            you're solving the right problem with the right approach.
          </p>
          <h4>Engineering-focused experiments</h4>
          <p>
            When you are solving well-defined but difficult technical problems.
          </p>
          <div className="example">
            <p>Example:</p>
            <p>
              SpaceX have had been making more progress than NASA using rapid
              experimentation. They run numerous failed landings, carefully
              collecting data and iterating on their product until they were
              able to{" "}
              <i>
                catch the largest flying object in history with chopsticks(!!!)
              </i>{" "}
            </p>
          </div>
          <h4>User-focused experiments</h4>
          <p>When you are solving user needs, behavior, and feedback.</p>
          <div className="example">
            <p>Example:</p>
            <p>
              Facebook tested various approaches to allow users to express
              approval of a post without leaving a comment. After experimenting
              with different designs, placements, and even the concept itself
              (at one point they tried a "star" rating system), Facebook
              introduced the "Like" button.
            </p>
          </div>
          <h4>Business-focused experiments</h4>
          <p>
            When you are exploring revenue models, pricing, or overall business
            strategies.
          </p>
          <div className="example">
            <p>Example:</p>
            <p>
              Originally a DVD rental business, Netflix pivoted to streaming
              after experimenting with different ways of delivering movies to
              customers.
            </p>
          </div>
          <h4>Process-focused experimentation</h4>
          <p>
            When you considering with how the product development process or
            company operations work.
          </p>
          <div className="example">
            <p>Example:</p>
            <p>
              Toyota's famous 'Lean Manufacturing' process became successful by
              iteration on reducing waste, improving assembly line processes,
              and empowering workers to solve production issues directly.
            </p>
          </div>
          <h4>Process-focused experimentation</h4>
          <p>
            When you considering with how the product development process or
            company operations work.
          </p>
          <div className="example">
            <p>Example:</p>
            <p>
              Toyota's famous 'Lean Manufacturing' process became successful by
              iteration on reducing waste, improving assembly line processes,
              and empowering workers to solve production issues directly.
            </p>
          </div>
          <h4>Hybrid product/service experimentation</h4>
          <p>
            Experimenting with how much of the solution should be productised
            vs. manual services.
          </p>
          <div className="example">
            <p>Example:</p>
            <p>
              LegalZoom combined automated legal document creation with optional
              manual lawyer reviews.
            </p>
          </div>

          <h3 style={{ marginTop: "5rem" }}>{`> Experiment goals`}</h3>
          <p>
            Designing a good experiment isn't just about building something and
            seeing if it works. It’s about setting clear goals and using the
            right method to test your assumptions. A key step before even
            building anything is setting up clear, measurable goals that will
            guide your experiments.
          </p>
          <p>
            A helpful approach is to set a "North Star" metric for your product.
            This should represent the most important thing you're trying to
            improve. The North Star for Facebook, for example, was daily active
            users (DAUs), while Spotify focuses on time spent listening. It’s
            one number you can focus on as you experiment.
          </p>
          <h3>Types of experiments</h3>
          <p>Let’s look at some common types of product experiments:</p>
          <h4>Prototypes</h4>
          <p>
            Prototypes are quick mock-ups that help you test your ideas without
            fully building them. They’re great for checking if the concept works
            for users, even though they might not be perfect.
          </p>
          <div className="example">
            <p>Example:</p>
            <p>
              ShopAR started out as a ‘service agency’ manually producing
              product images for ecommerce brands before building its
              self-service tool. This allowed us to understand client needs and
              what they valued in the service.
            </p>
          </div>
          <h4>Minimum Viable Product (MVP)</h4>
          <p>
            This is the most basic version of your product that still delivers
            value to users. It helps you gather feedback and make improvements
            quickly.
          </p>
          <div className="example">
            <p>Example:</p>
            <p>
              The Apple I was a hand-built MVP, while the Apple II, released
              just a year later, was a mass-produced version that took the
              feedback from the Apple I to market. The Apple I was very simple
              (no screen, for example), but it was enough to start a revolution
              in personal computing.
            </p>
          </div>
          <h4>Surveys</h4>
          <p>
            Surveys are a simple way to gather user feedback and understand
            their preferences, pain points, and satisfaction levels. Just be
            careful not to make them too long or filled with hypothetical
            questions.
          </p>
          <div className="example">
            <p>Example:</p>
            <p>
              A cancellation survey can be a great way to find out why customers
              are leaving, giving you insights into what might be broken or
              missing in your product.
            </p>
          </div>
          <h4>Smoke Tests</h4>
          <p>
            Smoke tests let you gauge interest in a product or feature before
            fully developing it. Essentially, you're testing the market's
            appetite for something to avoid wasted effort.
          </p>
          <div className="example">
            <p>Example:</p>
            <p>
              Dropbox used a simple video to explain how their product would
              work before they even built it. It generated so much interest that
              they knew they were onto something before they had to write a
              single line of code.
            </p>
          </div>
          <h4>A/B Tests</h4>
          <p>
            A/B tests compare two versions of something to see which one
            performs better. Just be mindful that if your startup doesn't have a
            large user base yet, it may be hard to get statistically significant
            results.
          </p>
          <div className="example">
            <p>Example:</p>
            <p>
              Facebook Ads Manager has had a tough time trying to improve its
              interface. Teams would run A/B tests, but initial versions often
              performed worse than the baseline, leading them to roll back the
              changes.
            </p>
          </div>
        </section>

        <section style={{ marginTop: "5rem" }}>
          <h2>3. Doing Experiments</h2>
          <p>
            Running experiments isn't just about having a good idea — it's also
            about executing it well. Here are some tips for carrying out
            experiments effectively:
          </p>

          <h4>Be technical, resist siloes</h4>
          <p>
            Cross-discipline knowledge is key. Understanding the technical side
            of your product can make a big difference in how quickly and
            effectively you can run experiments.
          </p>

          <h4>Prioritisation frameworks</h4>
          <p>
            Use prioritization frameworks like ICE (Impact, Confidence, Ease) or
            PIE (Potential, Importance, Ease) to focus on the most valuable
            experiments. It’s not really prioritization unless it hurts a bit!
          </p>

          <h4>Measuring experiment success</h4>
          <p>
            It’s critical to combine both quantitative (numbers) and qualitative
            (user feedback) data. Metrics show what’s happening, but user
            feedback tells you why. Running interviews alongside your tests will
            give you a deeper understanding of the problem.
          </p>
          <div className="example">
            <p>Example:</p>
            <p>
              A friend was working on an accounting tool for franchises. They
              found resistance from franchise locations. By speaking directly
              with users, they learned that some franchisees didn’t want HQ
              seeing their books. It was only by talking to users that they
              uncovered the real issue.
            </p>
          </div>

          <h4>Short-term setbacks for long-term gains</h4>
          <p>
            Sometimes an experiment will feel like it's making things worse in
            the short term, but that's part of reaching a better long-term
            solution. Stick with it if you believe in the experiment!
          </p>

          <h4>Keep it simple</h4>
          <p>
            Complexity can creep into experiments quickly. Always aim to keep
            things simple — from the tests you run to the processes around them.
            Every added layer of complexity can make it harder to get clear
            results.
          </p>

          <h4>Leverage LLMs</h4>
          <p>
            Large Language Models (LLMs) like ChatGPT and Claude can be great
            for speeding up your experimentation process. You can even use them
            to help you refine assumptions, generate hypotheses, or make sense
            of user feedback.
          </p>
        </section>

        <section style={{ marginTop: "5rem" }}>
          <h2>Resources</h2>
          <p>
            For further reading and tools to help with product experimentation:
          </p>
          <ul>
            <li>
              <a
                href="https://tgoldsmith.co.uk/writing/good-goals"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tom Goldsmith on setting good goals
              </a>
            </li>
            <li>
              <a href="https://www.dropbox.com/s/hsy9gje123f">
                ShopAR Case Study
              </a>
            </li>
            <li>
              <a
                href="https://www.novlr.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Novlr - Writing Platform
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=xy9nSnalvPc"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dropbox Smoke Test Video
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ProductExperimentation;
