import config, { IAccordionProps } from './Accordion.config';
import { T4DComponent, useEnhancedEditor } from '@ws-ui/webform-editor';
import Build from './Accordion.build';
import Render from './Accordion.render';

const Accordion: T4DComponent<IAccordionProps> = (props) => {
  const { enabled } = useEnhancedEditor((state) => ({
    enabled: state.options.enabled,
  }));
  return enabled ? <Build {...props} /> : <Render {...props} />;
};

const TabsRender: T4DComponent<IAccordionProps> = (props) => {
  return <Render {...props} />;
};

Accordion.craft = config.craft;
Accordion.info = config.info;
Accordion.defaultProps = config.defaultProps;

TabsRender.info = config.info;
TabsRender.defaultProps = config.defaultProps;

export default Accordion;

export { TabsRender as Tabs };
