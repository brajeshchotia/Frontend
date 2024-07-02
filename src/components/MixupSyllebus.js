import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function MixupSyllebus() {

    const [activeIndex, setActiveIndex] = useState(-1);

    const toggleCollapsible = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <div className='container'>


            <Tabs>
                <TabList>
                    <Tab>1. Excel</Tab>
                    <Tab>2. Python</Tab>
                    <Tab>3. SQL</Tab>
                    <Tab>4. Projects</Tab>
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
                        <div className={`collapsible ${activeIndex === 5 ? 'active' : ''}`} onClick={() => toggleCollapsible(5)}>6. Advanced Functions and Formulas</div>
                        <div className="content" style={{ display: activeIndex === 5 ? 'block' : 'none' }}>
                            <h6>&bull; Logical functions (IF, AND, OR)</h6>
                            <h6>&bull;  Lookup functions (VLOOKUP, HLOOKUP, INDEX, MATCH)</h6>
                            <h6>&bull; Text functions (LEN, LEFT, RIGHT, CONCATENATE)</h6>
                        </div>

                        <div className={`collapsible ${activeIndex === 6 ? 'active' : ''}`} onClick={() => toggleCollapsible(6)}>7.  Data Management Techniques</div>

                        <div className="content" style={{ display: activeIndex === 6 ? 'block' : 'none' }}>
                            <h6>&bull; Data validation</h6>
                            <h6>&bull; Conditional formatting</h6>
                            <h6>&bull; Using tables for data organization</h6>
                        </div>

                        <div className={`collapsible ${activeIndex === 7 ? 'active' : ''}`} onClick={() => toggleCollapsible(7)}>8.  Working with Multiple Worksheets and Workbooks</div>
                        <div className="content" style={{ display: activeIndex === 7 ? 'block' : 'none' }}>
                            <h6>&bull; Linking data between worksheets</h6>
                            <h6>&bull; Protecting worksheets and workbooks</h6>
                            <h6>&bull; Protecting worksheets and workbooks</h6>
                        </div>
                        <div className={`collapsible ${activeIndex === 8 ? 'active' : ''}`} onClick={() => toggleCollapsible(8)}>9. Advanced Data Analysis</div>
                        <div className="content" style={{ display: activeIndex === 8 ? 'block' : 'none' }}>
                            <h6>&bull; Sorting data</h6>
                            <h6>&bull; Filting data</h6>
                            <h6>&bull; Using basic charts (column, bar, pie)</h6>
                        </div>
                        <div className={`collapsible ${activeIndex === 9 ? 'active' : ''}`} onClick={() => toggleCollapsible(9)}>10. Automation with Macros</div>
                        <div className="content" style={{ display: activeIndex === 9 ? 'block' : 'none' }}>
                            <h6>&bull; Introduction to macros</h6>
                            <h6>&bull; Recording and editing macros</h6>
                            <h6>&bull; Assigning macros to buttons and shortcuts</h6>
                        </div>

                        <div className={`collapsible ${activeIndex === 10 ? 'active' : ''}`} onClick={() => toggleCollapsible(10)}>11. Data Analysis with Power Query</div>

                        <div className="content" style={{ display: activeIndex === 10 ? 'block' : 'none' }}>
                            <h6>&bull; Importing data with Power Query</h6>
                            <h6>&bull; Transforming and cleaning data</h6>
                            <h6>&bull; Merging and appending queries</h6>
                        </div>

                        <div className={`collapsible ${activeIndex === 11 ? 'active' : ''}`} onClick={() => toggleCollapsible(11)}>12. Data Modeling with Power Pivot</div>
                        <div className="content" style={{ display: activeIndex === 11 ? 'block' : 'none' }}>
                            <h6>&bull; Introduction to Power Pivot</h6>
                            <h6>&bull; Creating relationships between tables</h6>
                            <h6>&bull; DAX (Data Analysis Expressions) formulas</h6>
                        </div>
                        <div className={`collapsible ${activeIndex === 12 ? 'active' : ''}`} onClick={() => toggleCollapsible(12)}>13. Collaboration and Sharing</div>
                        <div className="content" style={{ display: activeIndex === 12 ? 'block' : 'none' }}>
                            <h6>&bull; Sharing workbooks</h6>
                            <h6>&bull; Reviewing and tracking changes</h6>
                            <h6>&bull; Protecting sensitive data</h6>
                        </div>
                        <div className={`collapsible ${activeIndex === 13 ? 'active' : ''}`} onClick={() => toggleCollapsible(13)}>14. Advanced Data Visualization</div>
                        <div className="content" style={{ display: activeIndex === 13 ? 'block' : 'none' }}>
                            <h6>&bull; Creating dynamic dashboards</h6>
                            <h6>&bull; Interactive charts with slicers and timelines</h6>
                            <h6>&bull; Customizing visuals with Excel add-ins</h6>
                        </div>
                        <div className={`collapsible ${activeIndex === 14 ? 'active' : ''}`} onClick={() => toggleCollapsible(14)}>15. Integrating with Other Applications</div>
                        <div className="content" style={{ display: activeIndex === 14 ? 'block' : 'none' }}>
                            <h6>&bull; Importing and exporting data from/to other applications (e.g., Microsoft Access, SQL Server)</h6>
                            <h6>&bull; Linking Excel data to PowerPoint presentations</h6>
                            <h6>&bull; Using Excel with Power BI for advanced analytics and visualization</h6>
                        </div>
                        <div className='collapsible'>16. Health Care Data Set</div>
                        <div className='collapsible'>17. Individual Project</div>

                    </div>

                </TabPanel>



                <TabPanel>
                    <div className='SyllebusSection' >
                        <div className={`collapsible ${activeIndex === 0 ? 'active' : ''}`} onClick={() => toggleCollapsible(0)}>1. Introduction to Python</div>
                        <div className="content" style={{ display: activeIndex === 0 ? 'block' : 'none' }}>
                            <h6>&bull; What is Python?</h6>
                            <h6>&bull; History of Python</h6>
                            <h6>&bull; Installing Python</h6>
                            <h6>&bull; Setting up Python Environment (IDEs like PyCharm, Jupyter Notebooks, or VSCode)</h6>
                        </div>

                        <div className={`collapsible ${activeIndex === 1 ? 'active' : ''}`} onClick={() => toggleCollapsible(1)}>2. Basic Python Syntax</div>

                        <div className="content" style={{ display: activeIndex === 1 ? 'block' : 'none' }}>
                            <h6>&bull; Variables and Data Types</h6>
                            <h6>&bull; Basic Operators</h6>
                            <h6>&bull; Print Statement</h6>
                            <h6>&bull; Basic Input/Output</h6>
                            <h6>&bull; String and its all function like indexing and etc.  </h6>
                        </div>

                        <div className={`collapsible ${activeIndex === 2 ? 'active' : ''}`} onClick={() => toggleCollapsible(2)}>3. Control Flow</div>
                        <div className="content" style={{ display: activeIndex === 2 ? 'block' : 'none' }}>
                            <h6>&bull; Conditional Statements (if, elif, else)</h6>
                            <h6>&bull; Loops (for, while)</h6>
                            <h6>&bull; Break and Continue statements</h6>
                        </div>
                        <div className={`collapsible ${activeIndex === 3 ? 'active' : ''}`} onClick={() => toggleCollapsible(3)}>4. Data Structures</div>
                        <div className="content" style={{ display: activeIndex === 3 ? 'block' : 'none' }}>
                            <h6>&bull; List</h6>
                            <h6>&bull; Tuples</h6>
                            <h6>&bull; Dictionaries</h6>
                            <h6>&bull; Sets</h6>
                        </div>
                        <div className={`collapsible ${activeIndex === 4 ? 'active' : ''}`} onClick={() => toggleCollapsible(4)}>5. Functions</div>
                        <div className="content" style={{ display: activeIndex === 4 ? 'block' : 'none' }}>
                            <h6>&bull; Built In Functions in Python</h6>
                            <h6>&bull; Defining Functions</h6>
                            <h6>&bull; Parameters and Arguments</h6>
                            <h6>&bull; Return Statement</h6>
                            <h6>&bull; Scope Variables</h6>
                        </div>
                        <div className={`collapsible ${activeIndex === 5 ? 'active' : ''}`} onClick={() => toggleCollapsible(5)}>6. File Handling</div>
                        <div className="content" style={{ display: activeIndex === 5 ? 'block' : 'none' }}>
                            <h6>&bull; Opening and Closing Files</h6>
                            <h6>&bull; Reading and Writing Files</h6>
                        </div>

                        <div className={`collapsible ${activeIndex === 6 ? 'active' : ''}`} onClick={() => toggleCollapsible(6)}>7. Object-Oriented Programming (OOP)</div>
                        <div className="content" style={{ display: activeIndex === 6 ? 'block' : 'none' }}>
                            <h6>&bull; Classes and Objects</h6>
                            <h6>&bull; Constructors</h6>
                            <h6>&bull; Inheritance</h6>

                        </div>

                        <div className={`collapsible ${activeIndex === 7 ? 'active' : ''}`} onClick={() => toggleCollapsible(7)}>8. Regular Expressions</div>



                        <div className={`collapsible ${activeIndex === 8 ? 'active' : ''}`} onClick={() => toggleCollapsible(8)}>9. Modules and Packages</div>
                        <div className="content" style={{ display: activeIndex === 8 ? 'block' : 'none' }}>
                            <h6>&bull; Importing Modules</h6>

                        </div>
                        <div className={`collapsible ${activeIndex === 9 ? 'active' : ''}`} onClick={() => toggleCollapsible(9)}>10. Functional Programming</div>
                        <div className="content" style={{ display: activeIndex === 9 ? 'block' : 'none' }}>
                            <h6>&bull; Lambda Functions</h6>
                            <h6>&bull; map(), filter(), reduce()</h6>

                        </div>
                        <div className={`collapsible ${activeIndex === 10 ? 'active' : ''}`} onClick={() => toggleCollapsible(10)}>11. Data Analysis and Visualization</div>
                        <div className="content" style={{ display: activeIndex === 10 ? 'block' : 'none' }}>
                            <h6>&bull; NumPy and Pandas for data manipulation and Analysis</h6>
                            <h6>&bull; Matplotlib and Seaborn for data visualization</h6>

                        </div>

                        <div className={`collapsible ${activeIndex === 11 ? 'active' : ''}`} onClick={() => toggleCollapsible(11)}>12. Machine Learning and Data Science</div>
                        <div className="content" style={{ display: activeIndex === 11 ? 'block' : 'none' }}>
                            <h6>&bull; Introduction of Machine Learning</h6>
                            <h6>&bull; Introduction to scikit-learn</h6>


                        </div>
                        <div className={`collapsible ${activeIndex === 12 ? 'active' : ''}`} onClick={() => toggleCollapsible(12)}>13. Machine Learning Alogorithm</div>
                        <div className="content" style={{ display: activeIndex === 12 ? 'block' : 'none' }}>
                            <h6>&bull;  Supervised Learning - Linear Regression</h6>
                            <h6>&bull;  Supervised Learning - Logistic Regression</h6>
                            <h6>&bull;  Unsupervised Learning - Cluster Model</h6>
                            <h6>&bull;  How to do predict</h6>
                        </div>
                        <div className='collapsible'>14. Banking Data Set(Data Understanding, Data manipulation & Cleaning, Visualization,  Modeling, Prediction) </div>
                        <div className='collapsible'>15. Time Series Forcasting </div>

                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='SyllebusSection' >
                        <br />
                        <h5 className='SQLHeading'>1. Basic SQL</h5>
                        <div className={`collapsible ${activeIndex === 0 ? 'active' : ''}`} onClick={() => toggleCollapsible(0)}>1. Databse Design</div>
                        <div className="content" style={{ display: activeIndex === 0 ? 'block' : 'none' }}>
                            <h6>&bull; Introduction</h6>
                            <h6>&bull; What is a Data Warehouse?</h6>
                            <h6>&bull; Structure of Data Warehouse</h6>
                            <h6>&bull; Star Schema</h6>
                            <h6>&bull; OLAP Vs OLTP</h6>
                            <h6>&bull; SETL</h6>
                            <h6>&bull; Entity Constraints</h6>
                            <h6>&bull; Referential Constraints</h6>

                            <h6>&bull; Semantic Constraints</h6>
                            <h6>&bull; ERDs Constraints</h6>
                            <h6>&bull; Star Schema: A Demonstration</h6>
                        </div>

                        <div className={`collapsible ${activeIndex === 1 ? 'active' : ''}`} onClick={() => toggleCollapsible(1)}>2. Database Creation in MySQL Workbench</div>

                        <div className="content" style={{ display: activeIndex === 1 ? 'block' : 'none' }}>
                            <h6>&bull; Introduction</h6>
                            <h6>&bull; Introduction to DDL And DML Statement</h6>
                            <h6>&bull; DDL Statement: A Demonstration</h6>
                            <h6>&bull; DML Statement: A Demonstration</h6>
                            <h6>&bull; Modifying column</h6>
                        </div>

                        <div className={`collapsible ${activeIndex === 2 ? 'active' : ''}`} onClick={() => toggleCollapsible(2)}>3. Querying in MySQL</div>
                        <div className="content" style={{ display: activeIndex === 2 ? 'block' : 'none' }}>
                            <h6>&bull; Introduction </h6>
                            <h6>&bull; SQL Statements And Operators</h6>
                            <h6>&bull; Aggregate Function</h6>
                            <h6>&bull; Ordering</h6>
                            <h6>&bull; The Having Clause</h6>
                            <h6>&bull; String and Date-Time Functions</h6>
                            <h6>&bull; Regular Expressions</h6>
                            <h6>&bull; Nested Queries</h6>
                            <h6>&bull; CTEs</h6>
                            <h6>&bull; Views</h6>
                        </div>
                        <div className={`collapsible ${activeIndex === 3 ? 'active' : ''}`} onClick={() => toggleCollapsible(3)}>4. Joins and Set Operations</div>
                        <div className="content" style={{ display: activeIndex === 3 ? 'block' : 'none' }}>
                            <h6>&bull; Introduction</h6>
                            <h6>&bull; Set Theory</h6>
                            <h6>&bull; Types of Joins</h6>
                            <h6>&bull; Types of Joins: A Demonstration</h6>
                            <h6>&bull; Outer Joins: A Demonstration</h6>
                            <h6>&bull; Views with Joins</h6>
                            <h6>&bull; Set Operaiton With SQL</h6>
                            <h6>&bull; SQL Case Study</h6>
                        </div>
                        <h5 className='SQLHeading'>2. Advanced SQL</h5>
                        <div className={`collapsible ${activeIndex === 4 ? 'active' : ''}`} onClick={() => toggleCollapsible(4)}>5. Window Functions</div>
                        <div className="content" style={{ display: activeIndex === 4 ? 'block' : 'none' }}>
                            <h6>&bull; Introduction</h6>
                            <h6>&bull; Rank Function - |</h6>
                            <h6>&bull; Rank Function = ||</h6>
                            <h6>&bull; Rank Function = |||</h6>
                            <h6>&bull; Partitioning</h6>
                            <h6>&bull; Named Windows</h6>
                            <h6>&bull; Frames - |</h6>
                            <h6>&bull; Frames - ||</h6>
                            <h6>&bull; Lead and Leg Function</h6>
                        </div>
                        <div className={`collapsible ${activeIndex === 5 ? 'active' : ''}`} onClick={() => toggleCollapsible(5)}>6. Case Statements, Stored Routines and Cursors</div>
                        <div className="content" style={{ display: activeIndex === 5 ? 'block' : 'none' }}>
                            <h6>&bull; Introduction</h6>
                            <h6>&bull; Case Statements - |</h6>
                            <h6>&bull; Case Statements = ||</h6>
                            <h6>&bull; UDFs</h6>
                            <h6>&bull; Stored Procedures</h6>
                            <h6>&bull; Cursors</h6>
                            <h6>&bull; Query Optimisation and Indexing - | & || and Clustered Vs Non Clustered Indexing</h6>
                        </div>
                        <div className='collapsible'>Best Practice Questions</div>



                    </div>

                </TabPanel>

                <TabPanel>
                    <div className='SyllebusSection' >
                        <div className='collapsible'>1. SQL-RSVP Movies Case Study</div>
                        <div className='collapsible'>2. Python-Credit EDA Assignment</div>
                        <div className='collapsible'>3. EXcel- Health Care Dataset</div>

                    </div>
                </TabPanel>
            </Tabs>

        </div>
    )
}
