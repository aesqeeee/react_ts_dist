import React, {
  memo,
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle
} from "react";
import { Table } from "@/utils/antComponent";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import type {
  FilterValue,
  SorterResult,
  TableCurrentDataSource
} from "antd/es/table/interface";
import { cloneDeep } from "@/utils/lodash";

interface IProps {
  columns: ColumnsType<any>;
  dataSource: any[];
  pagination?: TablePaginationConfig;
}

const initialProps: IProps = {
  columns: [],
  dataSource: [],
  pagination: {
    current: 1,
    pageSize: 10,
    pageSizeOptions: [10, 20, 50, 100],
    hideOnSinglePage: true,
    showQuickJumper: true,
    total: 0
  }
};

const TableComponent = forwardRef((props: IProps = initialProps, ref) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [pagination, setPagination] = useState<TablePaginationConfig>();
  useEffect(() => {
    if (pagination) {
      const paginationClone = cloneDeep(pagination);
      paginationClone.total = props.dataSource.length;
      setPagination(paginationClone);
    }
    return () => {};
  }, [props.dataSource]);
  useEffect(() => {
    setPagination(props.pagination);
    return () => {};
  }, [props.pagination]);
  // setPagination(props.pagination)

  const onChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<any> | SorterResult<any>[],
    extra: TableCurrentDataSource<any>
  ) => {
    setPagination(pagination);
    // console.log("onChange", pagination, filters, sorter, extra)
  };

  useImperativeHandle(ref, () => ({
    changeLoading(loading: boolean) {
      setLoading(loading);
    }
  }));

  return (
    <Table
      columns={props.columns}
      dataSource={props.dataSource}
      loading={loading}
      pagination={pagination}
      onChange={onChange}
    />
  );
});

export default TableComponent;
