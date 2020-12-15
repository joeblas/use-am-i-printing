import { useAmIPrinting } from '../../use-am-i-printing';

import { toCamel } from '../lib/util';

import hookConfig from '../../use-am-i-printing/package.json';

export default function Index() {
  const { name, description, repository = {}, author = {} } = hookConfig;

  const { name: authorName, url: authorUrl } = author;

  const { url: repositoryUrl } = repository;
  const repositoryExists = typeof repositoryUrl === 'string';

  const repositoryUrlDisplay = repositoryExists && repositoryUrl.split('://')[1];

  const isPrinting = useAmIPrinting();

  return (
    <main>
      <style jsx global>{`
        body {
          font-family: sans-serif;
          padding: 0;
          margin: 0;
        }

        main {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1em 0;
        }

        h1 {
          font-size: 2em;
        }

        img {
          max-width: 100%;
        }

        pre {
          overflow: auto;
          max-height: 15em;
          background-color: #eeeeee;
          padding: 1em;
        }

        section,
        footer {
          width: 100%;
          max-width: 50em;
          margin: 0 auto;
        }

        footer p {
          font-size: .9em;
        }

        footer p,
        footer a {
          color: #546e7a;
        }
      `}</style>

      <section>

        <h1>{toCamel(name)}</h1>

        <p>{description}</p>

        {repositoryExists && (
          <p>
            <a href={repositoryUrl}>
              {repositoryUrlDisplay}
            </a>
          </p>
        )}

        <h2>How to use</h2>

        <p>
          Put the hook in a React file. Detect whether or not the browser is printing the page.
        </p>

        <h2>Examples</h2>

        <h3>Set and grab message</h3>
        <p>
          <strong>Input:</strong>
        </p>
        <pre>
          <code>
            {`const isPrinting = useAmIPrinting();`}
          </code>
        </pre>
        <p>
          <strong>Output:</strong>
        </p>
        <p>
          {isPrinting ? 'Yes, I am printing.' : 'No, I am not printing.'}
        </p>
        <p>
          <strong>Tip:</strong>
        </p>
        <p>
          Try printing this page. Notice how the output above changes.
        </p>
      </section>

      <footer>
        <p>
          Made by <a href={authorUrl}>{authorName}</a>
        </p>
      </footer>
    </main>
  );

}