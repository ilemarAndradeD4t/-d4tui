import { Router, Truck, User } from "lucide-react";
import { AppLayout } from "./layouts/Application";
import {
  BottomNavigation,
  D4TTable,
  ITableColumn,
  ITablePagination,
  ITableSubmit,
  IUploadImage,
  MultipleImages,
} from "./components";
import { useEffect, useState } from "react";
import FileResizer from "react-image-file-resizer";

function App() {
  const profile = { role: "Administrador", name: "Kevin", lastname: "blanco" };
  const [uploadImages, setUploadImages] = useState<IUploadImage[]>([]);

  const sections = [
    {
      titleDescription: "Users",
      path: "/users",
      icon: <User />,
    },
    {
      titleDescription: "Router",
      path: "/routes",
      icon: <Router />,
    },
    {
      titleDescription: "Tracking",
      path: "/tracking",
      icon: <Truck />,
    },
    {
      titleDescription: "Analytics",
      path: "/anaytics",
      icon: <Truck />,
    },
  ];

  const data = [
    {
      id: "234",
      name: "Kevin",
    },
  ];
  const dataColumns: ITableColumn<any>[] = [
    {
      id: "id",
      label: "ID",
    },
    {
      id: "firtname",
      label: "CIDuno",
      isQuery: true,
    },

    {
      id: "role",
      label: "ROLE",
      isQuery: true,
    },
    {
      id: "id",
      label: "Nombre",
      filters: [
        {
          id: "name",
          label: "Nombre",
          value: "Kevin",
        },
      ],
    },
  ];

  const dataPagination: ITablePagination = {
    limit: 5,
    page: 1,
    labels: { plural: "Items", single: "Item" },
    hasPrevPage: false,
    hasNextPage: false,
  };
  const onSubmitTable: ITableSubmit = async ({
    queries,
    filters,
    page,
    limit,
  }) => {
    console.log({ queries, filters, page, limit });
  };

  const [hello, setHello] = useState([]);

  useEffect(() => {
    console.log("hello ==> ", hello);
  }, [hello]);

  return (
    <AppLayout>
      <D4TTable
        data={data}
        onSubmitTable={onSubmitTable}
        pagination={dataPagination}
        columns={dataColumns}
        error={false}
        loading={false}
      />

      <div className="mx-auto max-w-4xl">
        <D4TTable
          data={data}
          onSubmitTable={onSubmitTable}
          pagination={dataPagination}
          columns={dataColumns}
          error={false}
          loading={false}
          limitOfMultiSelect={4}
          multiItemsSelected={hello}
          setMultiItemsSelected={setHello}
        />
      </div>

      <MultipleImages
        label="Multi upload images"
        uploadLabel="upload"
        setUploadImages={setUploadImages}
        compress={{
          openComparisons: () => { },
          resizer: FileResizer,
        }}
      />
    </AppLayout>
  );
}

export default App;
