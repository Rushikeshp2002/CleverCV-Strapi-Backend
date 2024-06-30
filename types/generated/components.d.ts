import type { Struct, Schema } from '@strapi/strapi';

export interface TitleExperience extends Struct.ComponentSchema {
  collectionName: 'components_title_experiences';
  info: {
    displayName: 'experience';
    icon: '';
  };
  attributes: {};
}

export interface ObjectsExperienceComponent extends Struct.ComponentSchema {
  collectionName: 'components_objects_experience_components';
  info: {
    displayName: 'ExperienceComponent';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    companyName: Schema.Attribute.String;
    city: Schema.Attribute.String;
    state: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    workSummery: Schema.Attribute.RichText;
  };
}

export interface SkillsSkills extends Struct.ComponentSchema {
  collectionName: 'components_skills_skills';
  info: {
    displayName: 'Skills';
    icon: 'apps';
  };
  attributes: {
    name: Schema.Attribute.String;
    rating: Schema.Attribute.Integer;
  };
}

export interface EducationEducation extends Struct.ComponentSchema {
  collectionName: 'components_education_educations';
  info: {
    displayName: 'Education';
    icon: 'paintBrush';
  };
  attributes: {
    universityName: Schema.Attribute.String;
    degree: Schema.Attribute.String;
    major: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    description: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'title.experience': TitleExperience;
      'objects.experience-component': ObjectsExperienceComponent;
      'skills.skills': SkillsSkills;
      'education.education': EducationEducation;
    }
  }
}
