interface IProps extends IDispatchToProps, IStateToProps {
  componentId: string;
}

interface IDispatchToProps {
  getRandomUserAction?: () => void;
  swipeUserAction?: (user) => void;
}

interface IStateToProps {
  user: any;
}

interface IState {
  key: number;
}

export {IProps, IState};
