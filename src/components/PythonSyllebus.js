import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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

                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='SyllebusSection' >
                        <div className={`collapsible ${activeIndex === 0 ? 'active' : ''}`} onClick={() => toggleCollapsible(0)}>1. Object-Oriented Programming (OOP)</div>
                        <div className="content" style={{ display: activeIndex === 0 ? 'block' : 'none' }}>
                            <h6>&bull; Classes and Objects</h6>
                            <h6>&bull; Constructors</h6>
                            <h6>&bull; Inheritance</h6>
                            
                        </div>

                        <div className={`collapsible ${activeIndex === 1 ? 'active' : ''}`} onClick={() => toggleCollapsible(1)}>2. Regular Expressions</div>

                       

                        <div className={`collapsible ${activeIndex === 2 ? 'active' : ''}`} onClick={() => toggleCollapsible(2)}>3. Modules and Packages</div>
                        <div className="content" style={{ display: activeIndex === 2 ? 'block' : 'none' }}>
                            <h6>&bull; Importing Modules</h6>

                        </div>
                        <div className={`collapsible ${activeIndex === 3 ? 'active' : ''}`} onClick={() => toggleCollapsible(3)}>4. Functional Programming</div>
                        <div className="content" style={{ display: activeIndex === 3 ? 'block' : 'none' }}>
                            <h6>&bull; Lambda Functions</h6>
                            <h6>&bull; map(), filter(), reduce()</h6>
                            
                        </div>

                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='SyllebusSection' >
                        <div className={`collapsible ${activeIndex === 0 ? 'active' : ''}`} onClick={() => toggleCollapsible(0)}>1. Data Analysis and Visualization</div>
                        <div className="content" style={{ display: activeIndex === 0 ? 'block' : 'none' }}>
                            <h6>&bull; NumPy and Pandas for data manipulation and Analysis</h6>
                            <h6>&bull; Matplotlib and Seaborn for data visualization</h6>
                            
                        </div>

                        <div className={`collapsible ${activeIndex === 1 ? 'active' : ''}`} onClick={() => toggleCollapsible(1)}>2. Machine Learning and Data Science</div>
                        <div className="content" style={{ display: activeIndex === 1 ? 'block' : 'none' }}>
                            <h6>&bull; Introduction of Machine Learning</h6>
                            <h6>&bull; Introduction to scikit-learn</h6>
                            
                       
                        </div>
                        <div className={`collapsible ${activeIndex === 2 ? 'active' : ''}`} onClick={() => toggleCollapsible(2)}>3. Machine Learning Alogorithm</div>
                        <div className="content" style={{ display: activeIndex === 2 ? 'block' : 'none' }}>
                            <h6>&bull;  Supervised Learning - Linear Regression</h6>
                            <h6>&bull;  Supervised Learning - Logistic Regression</h6>
                            <h6>&bull;  Unsupervised Learning - Cluster Model</h6>
                            <h6>&bull;  How to do predict</h6>
                        </div>
                       

                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='SyllebusSection'>
                       <div className='collapsible'>1. Banking Data Set(Data Understanding, Data manipulation & Cleaning, Visualization,  Modeling, Prediction) </div>
                       <div className='collapsible'>2. Time Series Forcasting </div>
                    </div>
                </TabPanel>
            </Tabs>

        </div>
    )
}