import React from "react";
import { urls } from "../../services/constants";

const Explanation = () => {
  return (
    <section className="container">
      <div className="row justify-content-center py-4 py-md-5 py-xl-6">
        <div className="col-lg-10 col-xl-8 text-center mb-xl-4">
          <h1 className="display-4 mb-4">Why use feature flagging</h1>
          <p className="lead">
            Feature flagging is a method by which developers wrap a new feature
            in an if/then statement to gain more control over its release
          </p>
        </div>

        <div className="col-lg-10 col-xl-8  mb-xl-4 mt-6">
          <span className="material-icons tour-icon">home</span>
          <h3 className="mb-4">Introduction: Get the most from your flags</h3>
          <p className="text-muted">
            Feature flags (also feature switch, feature flag, feature flipper,
            conditional feature, etc) is a technique that helps developers and
            teams to modify the behavior of systems without having to change the
            code.
          </p>

          <p className="text-muted">
            Feature Flags is used to hide, enable, or disable the feature during
            runtime. For example, during the development process, a developer
            can enable the feature for testing and disable it for other users.
            The contents of this page are based on and taken from the following
            sites and articles:
          </p>

          <p className="text-muted">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <a
                  href="https://martinfowler.com/articles/feature-toggles.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Feature Toggle by Martin Fowler
                </a>
              </li>
              <li className="list-group-item">
                <a
                  href="https://featureflags.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Hub for Feature Flag Driven Development
                </a>
              </li>
              <li className="list-group-item">
                <a
                  href="https://en.wikipedia.org/wiki/Feature_toggle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Feature Toggle by Wikipedia
                </a>
              </li>
            </ul>
          </p>

          <p className="text-muted">
            Feature Flags is used by many large websites including Flickr,
            Disqus, Etsy, Reddit, Gmail, and Netflix, as well as software such
            as Google Chrome Canary.
          </p>

          <a
            className="link-cta"
            href={urls.app}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started for free
          </a>
        </div>

        <div className="col-lg-10 col-xl-8  mb-xl-4 mt-6">
          <span className="material-icons tour-icon">new_releases</span>
          <h3 className="mb-4">Handling release management</h3>
          <p className="text-muted">
            Continuous release and continuous deployment provide developers with
            rapid feedback about their code. This requires the integration of
            their code changes as early as possible. Feature branches introduce
            a bypass to this process. Feature Flags are an important technique
            used for the implementation of continuous delivery.
          </p>

          <p className="text-muted">
            Feature Flags allows developers to release a version of a product
            that has unfinished features. These unfinished features are hidden
            so they do not appear in the user interface.
          </p>

          <a
            className="link-cta"
            href={urls.docs}
            target="_blank"
            rel="noopener noreferrer"
          >
            See Documentation
          </a>
        </div>

        <div className="col-lg-10 col-xl-8  mb-xl-4 mt-6">
          <span className="material-icons tour-icon">code</span>
          <h3 className="mb-4">Reduce debt during implementation</h3>
          <p className="text-muted">
            Feature Flags are essentially variables that are used inside
            conditional statements. Therefore, the blocks inside these
            conditional statements can be toggled 'on or off' depending on the
            value of the feature toggles. A block of code that has been toggled
            'off' is similar to it being commented out. This allows developers
            to control the flow of their software and bypass features that are
            not ready for deployment.
          </p>

          <p className="text-muted">
            The main usage of feature flags is to avoid conflict that can arise
            when merging changes in software at the last moment before release.
            Although this can lead to Flag debt. Flag debt arises due to the
            dead code present in software after a feature has been toggled on
            permanently and produces overhead. This portion of the code has to
            be removed carefully as to not disturb other parts of the code.
          </p>

          <a
            className="link-cta"
            href={urls.docs}
            target="_blank"
            rel="noopener noreferrer"
          >
            See Documentation
          </a>
        </div>

        <div className="col-lg-10 col-xl-8  mb-xl-4 mt-6">
          <span className="material-icons tour-icon">emoji_flags</span>
          <h3 className="mb-4">Flags vs Branching</h3>
          <p className="text-muted">
            Feature branching allows developers to effectively collaborate
            around a central code base by keeping all changes to a specific
            feature in its own branch. With the addition of feature flags,
            feature branching becomes even more powerful and faster by
            separating feature release management from code deployment.
          </p>
          <p className="text-muted">
            Feature flagging allows developers to take full control of their
            feature lifecycles without depending on code deployments. When you
            merge a feature branch into master (production), it is already
            wrapped in a feature flag. This allows you to deploy the feature
            “off” and then gradually roll it out to users. It also allows you to
            quickly “kill” the feature if it is not working well, without having
            to redeploy.
          </p>
          <p className="text-muted">
            Therefore, feature flagging does not replace branching, it is
            complementary and makes it more powerful. Feature branching provides
            the flexibility to decide when and what to release, while feature
            flagging lets you take full control of the release itself. Together,
            branching and flagging help you maintain and integrate short-lived
            branches faster and with less risk.
          </p>
          <p className="text-muted">
            This allows many small incremental versions of software to be
            delivered without the cost of constant branching and merging.
          </p>

          <a
            className="link-cta"
            href={urls.app}
            target="_blank"
            rel="noopener noreferrer"
          >
            Create a new Feature Flag
          </a>
        </div>

        <div className="col-lg-10 col-xl-8  mb-xl-4 mt-6">
          <span className="material-icons tour-icon">credit_card</span>
          <h3 className="mb-4">
            Should you build or buy a feature flagging platform?
          </h3>
          <p className="text-muted">
            As a developer or product manager, your mission is to deliver
            quality software on time. You are looking to make your team fast,
            productive, and more coordinated. Most importantly, you want your
            customers to love your product. Feature flagging can help you
            achieve all these goals: on-time delivery and with less risk.
          </p>
          <p className="text-muted">
            Professional developer tools are both the foundation and scaffolding
            for building successful products. Without team collaboration tools,
            issue tracking tools, IDEs, and version control systems, your team
            would find it challenging to release timely, high-quality software.
            To facilitate and improve product development, managers must
            inevitably decide whether to build developer tools in-house,
            purchase a platform, or maintain.
          </p>
          <p className="text-muted">
            Feature flagging is a straightforward concept that becomes difficult
            to manage on an enterprise scale. It’s easy to manage one feature
            flag by modifying a configuration file, but when you have multiple
            feature flags across different environments, it’s harder to keep
            everyone in sync in a compliant fashion. Facebook has a feature
            flagging system called Gatekeeper that took years to build, using
            limitless engineering resources. Wrapping one feature with an
            if/else is just the start, an enterprise-grade feature flagging
            systems requires:
          </p>
          <br />
          <p className="text-muted">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                An intuitive dashboard that an entire organization can use.
              </li>
              <li className="list-group-item">
                Complex business rules for flags – “Can we roll this out to 10%
                of customers in Canada?”
              </li>
              <li className="list-group-item">
                Multivariate values – “If an end-user is on a different device
                version, behave differently.”
              </li>
              <li className="list-group-item">
                Performance & targeting analytics.
              </li>
              <li className="list-group-item">Speed in microseconds</li>
              <li className="list-group-item">
                Scale to handle millions/billions of flag evaluations
              </li>
              <li className="list-group-item">100% uptime and redundancy</li>
            </ul>
          </p>
          <p className="text-muted">
            Companies that have built internal feature flagging tools (e.g.
            Google, Facebook, and Amazon) dedicated large teams of engineers and
            DevOps experts to build the platform, and continue to use full-time
            engineers to maintain and scale their systems.
          </p>

          <a
            className="link-cta"
            href={urls.app}
            target="_blank"
            rel="noopener noreferrer"
          >
            Create a new flag for free
          </a>
        </div>
      </div>
    </section>
  );
};

export default Explanation;
