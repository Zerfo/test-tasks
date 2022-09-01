import React from 'react';
import SlomuxContext from './Context';

export default (mapStateToProps, mapDispatchToProps) => (Component) => {
  class Connect extends React.Component {
    store = this.context

    componentDidMount() {
      this.unsubscribe = this.store.subscribe(this.handleChange);
    }

    // Удаление subscription
    componentWillUnmount() {
      if (this.unsubscribe) this.unsubscribe();
    }

    // Лучше использовать setState вместо forceUpdate
    // Это даст возможность для оптимизации, когда повторный рендеринг не нужен
    handleChange = () => this.setState({})

    render() {
      // Проверка mapStateToProps и mapDispatchToProps
      // На случай если переданные параметры не являются функциями
      if (typeof mapStateToProps !== 'function') mapStateToProps = () => {};
      if (typeof mapDispatchToProps !== 'function') mapDispatchToProps = () => {};

      return (
        <Component
          {...mapStateToProps(this.store.getState(), this.props)}
          {...mapDispatchToProps(this.store.dispatch, this.props)}
          {...this.props}
        />
      );
    }
  }

  Connect.contextType = SlomuxContext;

  return Connect;
};
