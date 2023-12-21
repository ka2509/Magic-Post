import React, { useState, useEffect } from 'react';
import SingleProject from './SingleProject';
import ProjectFilter from './ProjectFilter';

const ProjectsGrid = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchProject, setSearchProject] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    const filterProjects = () => {
      setFilteredProjects(
        selectedCategory
          ? filterProjectsByCategory()
          : searchProject
          ? filterProjectsBySearch()
          : projects
      );
    };

    filterProjects();
  }, [selectedCategory, searchProject, projects]);

  const filterProjectsByCategory = () => {
    return projects.filter((item) => {
      const category = item.category.charAt(0).toUpperCase() + item.category.slice(1);
      return category.includes(selectedCategory);
    });
  };

  const filterProjectsBySearch = () => {
    const project = new RegExp(searchProject, 'i');
    return projects.filter((el) => el.title.match(project));
  };

  const handleFilterChange = (selectedValue) => {
    setSelectedCategory(selectedValue);
  };

  const handleSearchChange = (event) => {
    setSearchProject(event.target.value);
  };

  return (
    <section className="p-3 p-lg-5" id="projects">
      <div className="container">
        <h2 className="my-md-5 text-center mb-3">Dịch vụ</h2>
        <div className="row">
          <div className="col-12 col-lg-3 mb-3 mb-md-5">
            <input
              value={searchProject}
              onChange={handleSearchChange}
              className="form-control"
              id="name"
              name="name"
              type="search"
              required
              placeholder="Search"
              aria-label="Name"
            />
          </div>
          <div className="col-12 col-lg-6 mb-3 mb-md-5"></div>
          <div className="col-12 col-lg-3 mb-3 mb-md-5">
            <ProjectFilter onFilter={handleFilterChange} />
          </div>
        </div>
        <div className="project-cards row">
          {filteredProjects.map((project) => (
            <SingleProject key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;