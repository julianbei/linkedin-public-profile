'use strict';

function positionsAnalysis($, profile) {
  // Experiences
  profile.positions = [];
  $('#experience .positions .position').each(function extract() {
    const $positionItem = $(this);
    const position = {
      position: $positionItem.find('.item-title').text(),
      companyName: $positionItem.find('.item-subtitle').text(),
      from: $positionItem.find('.meta .date-range time:nth-child(1)').text(),
      to: $positionItem.find('.meta .date-range time:nth-child(2)').text(),
      locality: $positionItem.find('.meta .location').text(),
      description: $positionItem.find('.description').text(),
      current: ($positionItem.attr('data-section') === 'currentPositionsDetails'),
    };
    profile.positions.push(position);
  });

  return profile;
}

module.exports = positionsAnalysis;
