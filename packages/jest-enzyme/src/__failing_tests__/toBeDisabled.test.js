const { shallow, mount } = require('enzyme');
const React = require('react');
const PropTypes = require('prop-types');

describe('failing test', () => {
  [shallow, mount].forEach(builder => {
    describe(builder.name, () => {
      const Fixture = props => <input disabled={props.disabled} />;
      Fixture.propTypes = { disabled: PropTypes.bool };
      Fixture.defaultProps = { disabled: false };

      it('fails toBeDisabled', () => {
        expect(builder(<Fixture />).find('input')).toBeDisabled();
      });

      it('fails NOT toBeDisabled', () => {
        expect(builder(<Fixture disabled />).find('input')).not.toBeDisabled();
      });
    });
  });
});
