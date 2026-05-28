<script setup lang="ts">
type User = {
  email: string
  username: string
}

const config = useRuntimeConfig()

const { data, pending, error, refresh } = await useFetch<{ users: User[] }>('/users', {
  baseURL: config.public.apiBaseUrl
})
</script>

<template>
  <main class="page-shell">
    <section class="hero-panel">
      <p class="eyebrow">Lotus Fishing</p>
      <h1>Conexión inicial entre Nuxt y PostgreSQL</h1>
      <p class="intro">
        Esta vista consume el backend y muestra los usuarios guardados en PostgreSQL para validar
        el primer flujo completo del proyecto.
      </p>
      <button class="refresh-button" type="button" @click="refresh()">
        Recargar usuarios
      </button>
    </section>

    <section class="users-panel">
      <div class="panel-header">
        <div>
          <p class="panel-label">Primer endpoint</p>
          <h2>Usuarios</h2>
        </div>
        <span class="status-pill">{{ pending ? 'Cargando' : 'Listo' }}</span>
      </div>

      <p v-if="error" class="error-state">
        No se pudieron cargar los usuarios. Revisa la API y la conexión a PostgreSQL.
      </p>

      <ul v-else-if="data?.users?.length" class="user-list">
        <li v-for="user in data.users" :key="user.email" class="user-card">
          <strong>{{ user.username }}</strong>
          <span>{{ user.email }}</span>
        </li>
      </ul>

      <p v-else class="empty-state">
        No hay usuarios todavía.
      </p>
    </section>
  </main>
</template>

<style scoped>
.page-shell {
  width: min(1100px, calc(100% - 32px));
  margin: 0 auto;
  padding: 48px 0 72px;
}

.hero-panel,
.users-panel {
  background: var(--panel-bg);
  border: 1px solid var(--panel-border);
  border-radius: 28px;
  box-shadow: var(--shadow);
  backdrop-filter: blur(12px);
}

.hero-panel {
  padding: 40px;
}

.eyebrow,
.panel-label {
  margin: 0 0 12px;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.78rem;
  color: var(--accent-strong);
}

h1,
h2 {
  margin: 0;
  font-family: "Fraunces", Georgia, serif;
}

h1 {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 0.98;
  max-width: 12ch;
}

h2 {
  font-size: clamp(1.8rem, 4vw, 2.6rem);
}

.intro {
  max-width: 60ch;
  margin: 20px 0 0;
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-soft);
}

.refresh-button {
  margin-top: 28px;
  border: 0;
  border-radius: 999px;
  padding: 14px 22px;
  font: inherit;
  font-weight: 700;
  color: white;
  background: linear-gradient(135deg, var(--accent), var(--accent-strong));
  cursor: pointer;
}

.users-panel {
  margin-top: 28px;
  padding: 32px;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
}

.status-pill {
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(15, 118, 110, 0.12);
  color: var(--accent-strong);
  font-size: 0.9rem;
  font-weight: 700;
}

.user-list {
  list-style: none;
  padding: 0;
  margin: 28px 0 0;
  display: grid;
  gap: 16px;
}

.user-card {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
  padding: 18px 20px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(138, 112, 70, 0.12);
}

.user-card span,
.empty-state,
.error-state {
  color: var(--text-soft);
}

.error-state {
  margin-top: 24px;
  color: #b42318;
}

.empty-state {
  margin-top: 24px;
}

@media (max-width: 700px) {
  .page-shell {
    width: min(100% - 24px, 1100px);
    padding-top: 24px;
  }

  .hero-panel,
  .users-panel {
    padding: 24px;
  }

  .panel-header,
  .user-card {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>

