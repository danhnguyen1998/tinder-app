interface IProps extends IDispatchToProps, IStateToProps {
  componentId: string;
}

interface IDispatchToProps {
  getRandomUserAction?: () => void;
  swipeUserAction?: (user: any) => void;
}

interface IStateToProps {
  user: any;
}

interface IState {
  key: number;
}

export {IProps, IState};
