import React from 'react';
import { Formik, FormikProps, FormikActions } from 'formik';
// import { Form } from 'components/AntFormik';

import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import { employeeSchema } from './validation';

const initialValues = {
  first: '',
  last: '',
  favorite: '',
  explain: '',
};

interface IFormValue {
  first: string;
  last: string;
  favorite: string;
  explain: string;
}

interface PageTwoProps {
  changePage: (val: boolean) => void;
}

const EmployeeWizard = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [selectedComponent, setSelectedComponent] = React.useState({ Page: PageOne });

  // const Page = {
  //   One: PageOne,
  //   Two: PageTwo,
  // };

  // let SelectedPage = Page[selectedComponent];

  const changePage = (action: boolean) => {
    // console.log(action, currentPage, 'STATUS');

    // go back
    if (action) {
      if (currentPage === 1) return;
      setCurrentPage(currentPage - 1);
      setSelectedComponent({ Page: PageOne });
    }
    // go forward
    else {
      if (currentPage === 2) return;
      setCurrentPage(currentPage + 1);
      setSelectedComponent({ Page: PageTwo });
    }
  };

  const handleSubmit = async (values: IFormValue, actions: FormikActions<IFormValue>) => {
    console.log({ values, actions });

    actions.setSubmitting(false);
  };
  // console.log(currentPage, selectedComponent, 'currentPage');
  const { Page } = selectedComponent;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      enableReinitialize={true}
      validationSchema={employeeSchema}
    >
      {(props: PageTwoProps & FormikProps<IFormValue>) => <Page changePage={changePage} {...props} />}
    </Formik>
  );
};

export default EmployeeWizard;
