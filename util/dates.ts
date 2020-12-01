import moment from 'moment';

export const getExperienceYears = () => {
  return moment().diff(moment('2016-11-01'), 'years');
};
