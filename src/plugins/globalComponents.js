import Badge from "../layout/Badge";
import BaseAlert from "../layout/BaseAlert";
import BaseButton from "../layout/BaseButton";
import BaseCheckbox from "../layout/BaseCheckbox";
import BaseInput from "../layout/BaseInput";
import BasePagination from "../layout/BasePagination";
import BaseProgress from "../layout/BaseProgress";
import BaseRadio from "../layout/BaseRadio";
import BaseSwitch from "../layout/BaseSwitch";
import Card from "../layout/Card";
import Icon from "../layout/Icon";

export default {
  install(Vue) {
    Vue.component(Badge.name, Badge);
    Vue.component(BaseAlert.name, BaseAlert);
    Vue.component(BaseButton.name, BaseButton);
    Vue.component(BaseInput.name, BaseInput);
    Vue.component(BaseCheckbox.name, BaseCheckbox);
    Vue.component(BasePagination.name, BasePagination);
    Vue.component(BaseProgress.name, BaseProgress);
    Vue.component(BaseRadio.name, BaseRadio);
    Vue.component(BaseSwitch.name, BaseSwitch);
    Vue.component(Card.name, Card);
    Vue.component(Icon.name, Icon);
  }
};
