import { DateOrTimeView } from '../../../models';

export interface BaseTabsProps<TView extends DateOrTimeView> {
  /**
   * Currently visible picker view.
   */
  view: TView;
  /**
   * Callback called when a tab is clicked
   * @template TView
   * @param {TView} view The view to open
   */
  onViewChange: (view: TView) => void;
}

export interface ExportedBaseTabsProps {}
