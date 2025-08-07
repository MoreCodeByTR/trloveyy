import { FC, ReactNode } from 'react';

export interface VisibleProps {
  /**
   * 展示条件
   */
  when?: any;
  /**
   * 条件假展示节点
   */
  otherwise?: ReactNode;
  /**
   * 条件真展示节点
   */
  children?: ReactNode;
}

export const Visible: FC<VisibleProps> = ({
  when = false,
  otherwise,
  children,
}) => {
  if (when) {
    return <>{children}</>;
  }

  return <>{otherwise}</>;
};
