import React from "react";

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

/**
 * Renders a JSON-LD <script> tag for structured data.
 * Accepts a single schema object or an array of schema objects.
 */
export default function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify(data);
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
