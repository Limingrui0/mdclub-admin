import { h } from 'hyperapp';
import './index.less';

import Datatable from '../../components/datatable/view';

export default (global_state, global_actions) => {
  const actions = global_actions.comments;
  const state = global_state.comments;

  return ({ match }) => (
    <div
      oncreate={() => actions.init({ global_actions })}
      ondestroy={actions.destroy}
      key={match.url}
      id="page-comments"
      class="mdui-container-fluid"
    >
      <Datatable loadData={actions.loadData}/>
    </div>
  );
};
