CREATE TABLE
  public.todo_items (
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    title character varying NOT NULL,
    description character varying NOT NULL,
    obs character varying NULL
  );

ALTER TABLE
  public.todo_items
ADD
  CONSTRAINT todo_items_pkey PRIMARY KEY (id)