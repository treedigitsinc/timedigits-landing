# Supabase Migration via MCP

This skill documents how to properly apply Supabase migrations using MCP tools instead of CLI commands.

## The Right Way

Use `mcp__supabase__apply_migration` for schema changes:

```
mcp__supabase__apply_migration
- project_id: "your-project-ref"
- name: "migration_name_snake_case"
- query: "THE SQL CONTENT"
```

## Which Tool for What

| Tool | Use For |
|------|---------|  
| `apply_migration` | DDL: CREATE TABLE, ALTER TABLE, CREATE FUNCTION, CREATE INDEX, CREATE POLICY |
| `execute_sql` | DML: SELECT, INSERT, UPDATE, DELETE |

## Key Points

1. **Auth is automatic** - MCP server handles authentication, no service role key needed in commands
2. **Read SQL file first** - Use Read tool to get content, then pass to apply_migration
3. **Verify after** - Use `list_tables` or `execute_sql` to confirm changes

## DO NOT

- ❌ Use `supabase` CLI via bash (requires separate auth, often fails)
- ❌ Hardcode service role keys
- ❌ Use `execute_sql` for DDL (won't be tracked as migration)
- ❌ Use `supabase db push` or similar CLI commands

## Example Workflow

1. `Read("supabase/migrations/xyz.sql")`
2. `mcp__supabase__apply_migration(project_id, "xyz", sql_content)`
3. `mcp__supabase__list_tables(project_id)` to verify

## Finding Project ID

Use `mcp__supabase__list_projects()` to get all project IDs and names.
