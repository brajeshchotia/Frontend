import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../Styles/syllebus.css';


export default function ExcelSyllebus() {

    const [activeIndex, setActiveIndex] = useState(-1);

    const toggleCollapsible = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };


    return (
        <div className='container'>


            <Tabs>
                <TabList>
                    <Tab>1. Basic Level</Tab>
                    <Tab>2. Intermediate Level</Tab>
                    <Tab>3. Advanced Level</Tab>
                    <Tab>4. One Project</Tab>
                    <Tab><a style={{textDecoration: "None"}} href='https://docs.google.com/forms/d/e/1FAIpQLSeoZ9fJfLUN_9LT6ekBz1MZvMHkfzR6a-jicL9RF79pPErFuQ/viewform'>Register Here</a></Tab>

                </TabList>

                <TabPanel>
                    <div className='SyllebusSection' >
                        <div className={`collapsible ${activeIndex === 0 ? 'active' : ''}`} onClick={() => toggleCollapsible(0)}>1. Introduction to Excel</div>
                        <div className="content" style={{ display: activeIndex === 0 ? 'block' : 'none' }}>
                            <h6>&bull; Understanding the Excel interface</h6>
                            <h6>&bull; Navigating worksheets and workbooks</h6>
                            <h6>&bull; Basic terminology (cells, rows, columns, etc.)</h6>
                        </div>

                        <div className={`collapsible ${activeIndex === 1 ? 'active' : ''}`} onClick={() => toggleCollapsible(1)}>2. Data Entry and Formatting</div>

                        <div className="content" style={{ display: activeIndex === 1 ? 'block' : 'none' }}>
                            <h6>&bull; Entering data into cells</h6>
                            <h6>&bull; Formatting text, numbers, and cells</h6>
                            <h6>&bull; Using basic formatting tools (fonts, borders, fills)</h6>
                        </div>

                        <div className={`collapsible ${activeIndex === 2 ? 'active' : ''}`} onClick={() => toggleCollapsible(2)}>3. Formulas and Functions</div>
                        <div className="content" style={{ display: activeIndex === 2 ? 'block' : 'none' }}>
                            <h6>&bull; Introduction to formulas and operators</h6>
                            <h6>&bull; Common mathematical functions (SUM, AVERAGE, MAX, MIN)</h6>
                            <h6>&bull; Cell referencing (relative, absolute, mixed)</h6>
                        </div>
                        <div className={`collapsible ${activeIndex === 3 ? 'active' : ''}`} onClick={() => toggleCollapsible(3)}>4. Basic Data Analysis</div>
                        <div className="content" style={{ display: activeIndex === 3 ? 'block' : 'none' }}>
                            <h6>&bull; Sorting data</h6>
                            <h6>&bull; Filting data</h6>
                            <h6>&bull; Using basic charts (column, bar, pie)</h6>
                        </div>
                        <div className={`collapsible ${activeIndex === 4 ? 'active' : ''}`} onClick={() => toggleCollapsible(4)}>5. Introduction to Data Visualization</div>
                        <div className="content" style={{ display: activeIndex === 4 ? 'block' : 'none' }}>
                            <h6>&bull; Creating simple charts and graphs</h6>
                            <h6>&bull; Formatting and customizing charts</h6>
                            <h6>&bull; Adding titles, labels, and legends to charts</h6>
                        </div>
                    </div>

                </TabPanel>

                <TabPanel>
                    <div className='SyllebusSection' >
                        <div className={`collapsible ${activeIndex === 0 ? 'active' : ''}`} onClick={() => toggleCollapsible(0)}>1. Advanced Functions and Formulas</div>
                        <div className="content" style={{ display: activeIndex === 0 ? 'block' : 'none' }}>
                            <h6>&bull; Logical functions (IF, AND, OR)</h6>
                            <h6>&bull;  Lookup functions (VLOOKUP, HLOOKUP, INDEX, MATCH)</h6>
                            <h6>&bull; Text functions (LEN, LEFT, RIGHT, CONCATENATE)</h6>
                        </div>

                        <div className={`collapsible ${activeIndex === 1 ? 'active' : ''}`} onClick={() => toggleCollapsible(1)}>2.  Data Management Techniques</div>

                        <div className="content" style={{ display: activeIndex === 1 ? 'block' : 'none' }}>
                            <h6>&bull; Data validation</h6>
                            <h6>&bull; Conditional formatting</h6>
                            <h6>&bull; Using tables for data organization</h6>
                        </div>

                        <div className={`collapsible ${activeIndex === 2 ? 'active' : ''}`} onClick={() => toggleCollapsible(2)}>3.  Working with Multiple Worksheets and Workbooks</div>
                        <div className="content" style={{ display: activeIndex === 2 ? 'block' : 'none' }}>
                            <h6>&bull; Linking data between worksheets</h6>
                            <h6>&bull; Protecting worksheets and workbooks</h6>
                            <h6>&bull; Protecting worksheets and workbooks</h6>
                        </div>
                        <div className={`collapsible ${activeIndex === 3 ? 'active' : ''}`} onClick={() => toggleCollapsible(3)}>4. Advanced Data Analysis</div>
                        <div className="content" style={{ display: activeIndex === 3 ? 'block' : 'none' }}>
                            <h6>&bull; Sorting data</h6>
                            <h6>&bull; Filting data</h6>
                            <h6>&bull; Using basic charts (column, bar, pie)</h6>
                        </div>

                    </div>

                </TabPanel>
                
                <TabPanel>
                    <div className='SyllebusSection' >
                        <div className={`collapsible ${activeIndex === 0 ? 'active' : ''}`} onClick={() => toggleCollapsible(0)}>1. Automation with Macros</div>
                        <div className="content" style={{ display: activeIndex === 0 ? 'block' : 'none' }}>
                            <h6>&bull; Introduction to macros</h6>
                            <h6>&bull; Recording and editing macros</h6>
                            <h6>&bull; Assigning macros to buttons and shortcuts</h6>
                        </div>

                        <div className={`collapsible ${activeIndex === 1 ? 'active' : ''}`} onClick={() => toggleCollapsible(1)}>2. Data Analysis with Power Query</div>

                        <div className="content" style={{ display: activeIndex === 1 ? 'block' : 'none' }}>
                            <h6>&bull; Importing data with Power Query</h6>
                            <h6>&bull; Transforming and cleaning data</h6>
                            <h6>&bull; Merging and appending queries</h6>
                        </div>

                        <div className={`collapsible ${activeIndex === 2 ? 'active' : ''}`} onClick={() => toggleCollapsible(2)}>3. Data Modeling with Power Pivot</div>
                        <div className="content" style={{ display: activeIndex === 2 ? 'block' : 'none' }}>
                            <h6>&bull; Introduction to Power Pivot</h6>
                            <h6>&bull; Creating relationships between tables</h6>
                            <h6>&bull; DAX (Data Analysis Expressions) formulas</h6>
                        </div>
                        <div className={`collapsible ${activeIndex === 3 ? 'active' : ''}`} onClick={() => toggleCollapsible(3)}>4. Collaboration and Sharing</div>
                        <div className="content" style={{ display: activeIndex === 3 ? 'block' : 'none' }}>
                            <h6>&bull; Sharing workbooks</h6>
                            <h6>&bull; Reviewing and tracking changes</h6>
                            <h6>&bull; Protecting sensitive data</h6>
                        </div>
                        <div className={`collapsible ${activeIndex === 3 ? 'active' : ''}`} onClick={() => toggleCollapsible(4)}>4. Advanced Data Visualization</div>
                        <div className="content" style={{ display: activeIndex === 4 ? 'block' : 'none' }}>
                            <h6>&bull; Creating dynamic dashboards</h6>
                            <h6>&bull; Interactive charts with slicers and timelines</h6>
                            <h6>&bull; Customizing visuals with Excel add-ins</h6>
                        </div>
                        <div className={`collapsible ${activeIndex === 3 ? 'active' : ''}`} onClick={() => toggleCollapsible(5)}>4. Integrating with Other Applications</div>
                        <div className="content" style={{ display: activeIndex === 5 ? 'block' : 'none' }}>
                            <h6>&bull; Importing and exporting data from/to other applications (e.g., Microsoft Access, SQL Server)</h6>
                            <h6>&bull; Linking Excel data to PowerPoint presentations</h6>
                            <h6>&bull; Using Excel with Power BI for advanced analytics and visualization</h6>
                        </div>

                    </div>

                </TabPanel>

                <TabPanel>
                    <div className='SyllebusSection'>
                    <div className='collapsible'>1. Health Care Data Set</div>
                     <div className='collapsible'>2. Individual Project</div>
                    </div>
                  
                </TabPanel>
                
            </Tabs>

        </div>
    )
}
