-- Supabase / PostgreSQL schema for Reahs Foods
-- Run these in the Supabase SQL editor

-- 1) Menu items table
create table if not exists menu_items (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  description text,
  price numeric(10,2) not null,
  category text,
  image_url text,
  available boolean not null default true,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- 2) Inventory table
create table if not exists inventory (
  id uuid default uuid_generate_v4() primary key,
  menu_item_id uuid references menu_items(id) on delete cascade,
  stock integer not null default 0,
  low_stock_threshold integer not null default 5,
  updated_at timestamp with time zone default now()
);

-- 3) Orders table
create table if not exists orders (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) on delete set null,
  status text not null default 'pending',
  total_amount numeric(10,2) not null,
  shipping_address text,
  payment_method text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- 4) Order items table
create table if not exists order_items (
  id uuid default uuid_generate_v4() primary key,
  order_id uuid references orders(id) on delete cascade,
  menu_item_id uuid references menu_items(id) on delete set null,
  quantity integer not null default 1,
  unit_price numeric(10,2) not null,
  created_at timestamp with time zone default now()
);

-- 5) User preferences / recommendations table
create table if not exists user_preferences (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) on delete cascade,
  favorite_categories text[],
  dietary_restrictions text[],
  last_ordered_at timestamp with time zone,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Trigger helpers to keep updated_at current
create or replace function set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger menu_items_updated_at
  before update on menu_items
  for each row execute function set_updated_at();

create trigger inventory_updated_at
  before update on inventory
  for each row execute function set_updated_at();

create trigger orders_updated_at
  before update on orders
  for each row execute function set_updated_at();

create trigger order_items_updated_at
  before update on order_items
  for each row execute function set_updated_at();

create trigger user_preferences_updated_at
  before update on user_preferences
  for each row execute function set_updated_at();

-- Optional: Row-Level Security example for orders
-- alter table orders enable row level security;
-- create policy "Users can manage their own orders" on orders
--   using (user_id = auth.uid())
--   with check (user_id = auth.uid());

-- Optional: Row-Level Security example for preferences
-- alter table user_preferences enable row level security;
-- create policy "Users can view their own preferences" on user_preferences
--   using (user_id = auth.uid());
-- create policy "Users can modify their own preferences" on user_preferences
--   with check (user_id = auth.uid());
