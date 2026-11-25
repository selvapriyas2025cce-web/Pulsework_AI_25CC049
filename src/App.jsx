import "./App.css";

const tasks = [
  { name: "Review AI annotations", project: "Image Labeling", assignee: "RK", status: "Completed" },
  { name: "Validate dataset", project: "Speech to Text", assignee: "SP", status: "In Progress" },
  { name: "Update evaluation script", project: "Model QA", assignee: "AK", status: "Pending" },
  { name: "Prepare QBR report", project: "DC Reporting", assignee: "MK", status: "In Progress" },
  { name: "Sync log DB to datalake", project: "Data Pipeline", assignee: "NK", status: "Pending" },
];

const projects = [
  { name: "Image Labeling", members: 6, icon: "▦", color: "purple", status: "Active" },
  { name: "Speech to Text", members: 4, icon: "♩", color: "blue", status: "Active" },
  { name: "Model QA", members: 5, icon: "▣", color: "pink", status: "On Hold" },
  { name: "DC Reporting", members: 3, icon: "▤", color: "green", status: "Active" },
  { name: "Data Pipeline", members: 4, icon: "♧", color: "cyan", status: "Active" },
];

const menu = [
  { icon: "⌂", name: "Dashboard" },
  { icon: "▦", name: "Projects" },
  { icon: "☑", name: "Tasks" },
  { icon: "♧", name: "Team" },
  { icon: "▤", name: "Reports" },
  { icon: "⚙", name: "Settings" },
];

function StatCard({ icon, title, value, color }) {
  return (
    <div className="stat-card">
      <div className={`stat-icon ${color}`}>{icon}</div>

      <div className="stat-details">
        <p>{title}</p>
        <h2>{value}</h2>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="dashboard-layout">

      {/* Sidebar */}
      <aside className="sidebar">

        <div className="brand">
          <span className="brand-icon">〽</span>
          <span>PulseWorks AI</span>
        </div>

        <p className="menu-heading">MAIN MENU</p>

        <nav className="sidebar-nav">
          {menu.map((item) => (
            <a
              href="#"
              key={item.name}
              className={`nav-item ${
                item.name === "Dashboard" ? "selected" : ""
              }`}
              onClick={(e) => e.preventDefault()}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.name}
            </a>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-profile">
            <div className="sidebar-avatar">P</div>
            <div>
              <h4>Priya</h4>
              <p>Administrator</p>
            </div>
          </div>
        </div>

      </aside>

      {/* Main Content */}
      <main className="main-content">

        {/* Topbar */}
        <header className="topbar">

          <div className="search-box">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search projects, tasks, or team..."
            />
          </div>

          <div className="topbar-right">
            <button className="notification">♧</button>

            <div className="profile">
              <div className="avatar">P</div>
              <span>Priya</span>
            </div>
          </div>

        </header>

        {/* Welcome Section */}
        <section className="welcome">

          <div>
            <h1>Welcome back, Priya 👋</h1>
            <p>Here's what's happening at PulseWorks AI today</p>
          </div>

          <span className="date">Wed, Nov 25, 2026</span>

        </section>

        {/* Statistics */}
        <section className="stats-grid">

          <StatCard
            icon="▣"
            title="Total Projects"
            value="24"
            color="purple"
          />

          <StatCard
            icon="☷"
            title="Total Tasks"
            value="1,248"
            color="blue"
          />

          <StatCard
            icon="♧"
            title="Active Members"
            value="18"
            color="green"
          />

          <StatCard
            icon="◷"
            title="Pending Tasks"
            value="96"
            color="orange"
          />

        </section>

        {/* Dashboard Sections */}
        <section className="dashboard-grid">

          {/* Recent Tasks */}
          <div className="panel tasks-panel">

            <div className="panel-header">
              <div>
                <h3>Recent Tasks</h3>
                <p>Track your team's latest activities</p>
              </div>

              <a href="#" onClick={(e) => e.preventDefault()}>
                View All →
              </a>
            </div>

            <div className="table-wrapper">

              <table>
                <thead>
                  <tr>
                    <th>Task</th>
                    <th>Project</th>
                    <th>Assignee</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {tasks.map((task, index) => (
                    <tr key={index}>

                      <td className="task-cell">
                        <input type="checkbox" />
                        {task.name}
                      </td>

                      <td>{task.project}</td>

                      <td>
                        <span className="assignee">
                          {task.assignee}
                        </span>
                      </td>

                      <td>
                        <span
                          className={`status ${task.status
                            .toLowerCase()
                            .replace(" ", "-")}`}
                        >
                          {task.status}
                        </span>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>

            </div>
          </div>

          {/* Active Projects */}
          <div className="panel projects-panel">

            <div className="panel-header">
              <div>
                <h3>Active Projects</h3>
                <p>Overview of your projects</p>
              </div>

              <a href="#" onClick={(e) => e.preventDefault()}>
                View All →
              </a>
            </div>

            <div className="project-list">

              {projects.map((project) => (
                <div className="project-item" key={project.name}>

                  <div className={`project-icon ${project.color}`}>
                    {project.icon}
                  </div>

                  <div className="project-info">
                    <h4>{project.name}</h4>
                    <p>{project.members} members</p>
                  </div>

                  <span
                    className={`project-status ${
                      project.status === "Active" ? "active" : "hold"
                    }`}
                  >
                    {project.status}
                  </span>

                </div>
              ))}

            </div>
          </div>

        </section>

      </main>
    </div>
  );
}

export default Dashboard;